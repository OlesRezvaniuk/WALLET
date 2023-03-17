import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTransactionsOperation } from 'redux/transactions/transactionsOperations';
import { Calendar } from 'components/Calendar/Calendar';
import { date } from 'components/Calendar/calendarHelpers/calendarHelpers';
import { getTransactionsCategories } from 'redux/transactions/transactionsOperations';
import { useSelector } from 'react-redux';
import { categoriesSelector } from 'redux/transactions/transactionsSelector';

export const AddTransactionsModal = () => {
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

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(createTransactionsOperation(request));
        }}
      >
        <div>
          <span
            style={{
              fontWeight: request.type === 'INCOME' && 'bold',
            }}
          >
            INCOME
          </span>
          <button type="button" onClick={handleChangeType}>
            {request.type === 'EXPENSE' ? '-' : '+'}
          </button>
          <span
            style={{
              fontWeight: request.type === 'EXPENSE' && 'bold',
            }}
          >
            EXPENSE
          </span>
        </div>
        <div></div>
        <input
          value={request.amount}
          onBlur={e => {
            if (request.type === 'EXPENSE') {
              setTransaction({
                ...transaction,
                request: { ...request, amount: e.target.value * -1 },
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
        <br />
        {request.type === 'EXPENSE' && (
          <div>
            <button
              onClick={() => {
                setTransaction({ ...transaction, category: 'onChange' });
              }}
              type="button"
            >
              {transaction.category !== '' &&
              transaction.category !== 'onChange'
                ? `${transaction.category}`
                : 'Select a category'}
            </button>
            {transaction.category === 'onChange' && (
              <div>
                <ul style={{ overflow: 'auto', height: 100, width: 200 }}>
                  {categories.map(item => {
                    return (
                      <li key={item.id}>
                        <p id={item.id} onClick={handleChangeCaterogies}>
                          {item.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}

        <Calendar
          date={date}
          transaction={transaction}
          setTransaction={setTransaction}
        />
        <textarea
          value={transaction.request.comment}
          onChange={e => {
            setTransaction({
              ...transaction,
              request: { ...transaction.request, comment: e.target.value },
            });
          }}
          style={{ resize: 'none' }}
          placeholder="Comment"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
