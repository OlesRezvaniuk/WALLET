import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createTransactionsOperation,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';
import { Calendar } from 'components/Calendar/Calendar';
import { date } from 'components/Calendar/calendarHelpers/calendarHelpers';
import { getTransactionsCategories } from 'redux/transactions/transactionsOperations';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/transactions/transactionsSelector';
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

export const AddTransactionsModal = ({ SetIsModalOpen }) => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
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

  console.log(isCalendarModalOpen);

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
      <Form
        onSubmit={async e => {
          e.preventDefault();
          await dispatch(createTransactionsOperation(request));
          await dispatch(getUserTransactions());
          setTransaction({
            ...transaction,
            category: '',
            request: { ...request, amount: '' },
          });
          SetIsModalOpen(false);
          document.querySelector('body').classList.remove('modal');
        }}
      >
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
              <ArrowBottom />
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
