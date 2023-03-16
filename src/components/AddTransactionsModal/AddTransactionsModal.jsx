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

  useEffect(() => {
    dispatch(getTransactionsCategories());
  }, []);

  const handleChangeType = e => {
    e.preventDefault();
    if (transaction.request.type === 'INCOME') {
      setTransaction({
        ...transaction,
        request: { ...transaction.request, type: 'EXPENSE', categoryId: '' },
      });
    } else {
      setTransaction({
        ...transaction,
        request: {
          ...transaction.request,
          type: 'INCOME',
          categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        },
      });
    }
  };

  const handleChangeCaterogies = item => {
    setTransaction({
      ...transaction,
      category: item.name,
      request: {
        ...transaction.request,
        categoryId: item.id,
      },
    });
    console.log(item);
  };

  console.log(transaction);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(createTransactionsOperation(transaction.request));
        }}
      >
        <div>
          <span
            style={{
              fontWeight: transaction.request.type === 'INCOME' && 'bold',
            }}
          >
            INCOME
          </span>
          <button type="button" onClick={handleChangeType}>
            {transaction.request.type === 'EXPENSE' ? '-' : '+'}
          </button>
          <span
            style={{
              fontWeight: transaction.request.type === 'EXPENSE' && 'bold',
            }}
          >
            EXPENSE
          </span>
        </div>
        <div></div>
        <input
          value={transaction.request.amount}
          onChange={e => {
            e.preventDefault();
            setTransaction({
              ...transaction,
              request: { ...transaction.request, amount: e.target.value },
            });
          }}
          type="number"
          placeholder="0.00"
        />
        <br />
        {transaction.request.type === 'EXPENSE' && (
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
                  {categories.data.map(item => {
                    return (
                      <li key={item.id} id={item.id}>
                        <p onClick={handleChangeCaterogies(item)}>
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
