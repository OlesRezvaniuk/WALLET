import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createTransactionsOperation,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';
import { Calendar } from 'components/Calendar/Calendar';
import { date } from 'components/Calendar/calendarHelpers/calendarHelpers';
import { getTransactionsCategories } from 'redux/transactions/transactionsOperations';
import { getUserTransactionsSummary } from 'redux/transactions/transactionsOperations';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/transactions/transactionsSelector';
import { currentUserOperation } from 'redux/auth/authOperations';
import {
  Backdrop,
  Form,
  CrossIcon,
  Title,
  MinusIcon,
  ChangeTypeBtnBox,
  ChangeTypeBtn,
  ChangeTypeBtnIconBox,
  ChangeTypeBtnText,
  Input,
  // CalendarIcon,
  HiddenInputControlls,
  AdaptiveList,
  SelectCategoryBtn,
  ArrowBottom,
  CategoryListBox,
  CategoryList,
  CategoryListHiddenControlls,
  CategoryListItem,
  CommentTextArea,
  ModalButtonsBox,
  ModalButton,
} from './AddTransitionsModal.styled';
import { AddTransitionValidation } from './AddTransitionValidation';

export const AddTransactionsModal = ({ SetIsModalOpen }) => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  const [transaction, setTransaction] = useState({
    request: {
      transactionDate: date().response,
      type: 'INCOME',
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: '',
      amount: '',
    },
    category: '',
  });
  const { request } = transaction;

  useEffect(() => {
    dispatch(getTransactionsCategories());
    // eslint-disable-next-line
  }, []);

  const handleChangeType = e => {
    e.preventDefault();

    if (request.type === 'INCOME') {
      setTransaction({
        ...transaction,
        request: { ...request, type: 'EXPENSE', categoryId: '' },
      });
    } else {
      setTransaction({
        ...transaction,
        request: {
          ...request,
          type: 'INCOME',
          categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        },
      });
    }
  };

  useEffect(() => {
    setTransaction({
      ...transaction,
      request: { ...request, amount: '' },
    });
    // eslint-disable-next-line
  }, [request.type]);

  const handleChangeCaterogies = e => {
    setTransaction({
      ...transaction,
      category: e.target.innerText,
      request: {
        ...request,
        categoryId: e.target.id,
      },
    });
  };

  async function send() {
    await dispatch(createTransactionsOperation(request));
    await dispatch(getUserTransactions());
    setTransaction({
      ...transaction,
      category: '',
      request: { ...request, amount: '' },
    });
    await dispatch(
      getUserTransactionsSummary({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      })
    );
    await dispatch(currentUserOperation());
    SetIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  }

  const handleCreateTransaction = e => {
    e.preventDefault();

    AddTransitionValidation({
      request,
      setErrorMessage,
      errorMessage,
      send,
    });
  };

  useEffect(() => {
    if (request.type === 'INCOME') {
      if (request.amount === '' || request.amount === 0) {
        setErrorMessage(true);
        console.log('change');
      } else {
        setErrorMessage(false);
      }
    }
    if (request.type === 'EXPENSE') {
      if (
        request.amount === '' ||
        request.amount === 0 ||
        request.categoryId === ''
      ) {
        setErrorMessage(true);
        console.log('change');
      } else {
        setErrorMessage(false);
      }
    }
    // eslint-disable-next-line
  }, [request.amount]);

  return (
    <Backdrop
      onClick={e => {
        if (e.target.id === 'addTransitionModalBackdrop') {
          SetIsModalOpen(false);
          document.querySelector('body').classList.remove('modal');
        }
      }}
      id="addTransitionModalBackdrop"
    >
      <Form onSubmit={handleCreateTransaction}>
        <CrossIcon
          color={request.type}
          onClick={() => {
            SetIsModalOpen(false);
            document.querySelector('body').classList.remove('modal');
          }}
        />

        <Title>Add transaction</Title>
        <ChangeTypeBtnBox>
          <ChangeTypeBtnText
            style={{ color: request.type === 'INCOME' && '#24CCA7' }}
          >
            Income
          </ChangeTypeBtnText>
          <ChangeTypeBtn
            color={request.type}
            type="button"
            onClick={handleChangeType}
          >
            <ChangeTypeBtnIconBox type={request.type}>
              <MinusIcon />
              <MinusIcon type={request.type} />
            </ChangeTypeBtnIconBox>
          </ChangeTypeBtn>
          <ChangeTypeBtnText
            style={{ color: request.type === 'EXPENSE' && '#FF6596' }}
          >
            Expense
          </ChangeTypeBtnText>
        </ChangeTypeBtnBox>
        {request.type === 'EXPENSE' && (
          <div style={{ position: 'relative' }}>
            <SelectCategoryBtn
              id="changeTransitionTypeButton"
              onClick={() => {
                if (transaction.category === 'onChange') {
                  setTransaction({ ...transaction, category: '' });
                } else if (isCalendarModalOpen) {
                  return;
                } else {
                  setTransaction({ ...transaction, category: 'onChange' });
                }
              }}
              color={request.type}
              type="button"
            >
              {transaction.category !== '' &&
              transaction.category !== 'onChange'
                ? `${transaction.category}`
                : 'Select a category'}
              <ArrowBottom
                style={{
                  transform:
                    transaction.category === 'onChange' && 'rotate(180deg)',
                }}
              />
            </SelectCategoryBtn>
            {transaction.category === 'onChange' && (
              <CategoryListBox>
                <CategoryListHiddenControlls />
                <CategoryList>
                  {categories.transactions.getCategories.map(item => {
                    return (
                      <CategoryListItem key={item.id}>
                        <p id={item.id} onClick={handleChangeCaterogies}>
                          {item.name}
                        </p>
                      </CategoryListItem>
                    );
                  })}
                </CategoryList>
              </CategoryListBox>
            )}
          </div>
        )}
        <AdaptiveList>
          <li>
            <div style={{ position: 'relative' }}>
              <HiddenInputControlls />
              <Input
                style={{
                  pointerEvents:
                    request.type === 'EXPENSE' &&
                    request.categoryId === '' &&
                    'none',
                }}
                color={request.type}
                value={request.amount}
                onBlur={e => {
                  if (request.type === 'EXPENSE') {
                    setTransaction({
                      ...transaction,
                      request: { ...request, amount: e.target.value * -1 },
                    });
                  } else if (request.type === 'INCOME') {
                    setTransaction({
                      ...transaction,
                      request: { ...request, amount: e.target.value },
                    });
                  }
                }}
                onChange={e => {
                  e.preventDefault();
                  setTransaction({
                    ...transaction,
                    request: { ...request, amount: e.target.value },
                  });
                }}
                type="number"
                placeholder="0.00"
              />
              {errorMessage && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 22,
                    left: 0,
                    width: '100%',
                    color: 'tomato',
                    fontSize: 12,
                    textAlign: 'start',
                    fontStyle: 'italic',
                  }}
                >
                  {request.type === 'EXPENSE' && request.categoryId === ''
                    ? 'First you must select a category'
                    : 'You must enter a quantity'}
                </span>
              )}
            </div>
          </li>
          <li>
            <Calendar
              setIsCalendarModalOpen={setIsCalendarModalOpen}
              request={request}
              date={date}
              transaction={transaction}
              setTransaction={setTransaction}
            />
          </li>
        </AdaptiveList>
        <CommentTextArea
          color={request.type}
          value={transaction.request.comment}
          onChange={e => {
            setTransaction({
              ...transaction,
              request: { ...transaction.request, comment: e.target.value },
            });
          }}
          style={{ resize: 'none' }}
          placeholder="Comment"
        ></CommentTextArea>
        <ModalButtonsBox>
          <ModalButton type="submit">Add</ModalButton>
          <ModalButton
            onClick={() => {
              SetIsModalOpen(false);
              document.querySelector('body').classList.remove('modal');
            }}
            type="button"
          >
            Cancel
          </ModalButton>
        </ModalButtonsBox>
      </Form>
    </Backdrop>
  );
};
