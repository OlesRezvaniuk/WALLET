import { useState, useEffect } from 'react';
import { dateChooseData } from 'components/DateChoose/DateChooseData';
import { convertMounth } from 'components/DateChoose/DateChooseData';
import { useDispatch } from 'react-redux';
import { createTransactionsOperation } from 'redux/transactions/transactionsOperations';

export const AddTransactionsModal = ({ date }) => {
  const dispatch = useDispatch();

  const [dateChoose, setDateChoose] = useState({
    day: date().render.day,
    mounth: date().render.mounth,
    year: date().render.year,
    isModalOpen: false,
    changeData: false,
    newDate: { day: '', mounth: '', year: '', finish: null },
  });
  const [transaction, setTransaction] = useState({
    transactionDate: date().response,
    type: 'INCOME',
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    comment: '',
    amount: '',
  });
  // 1. GET CATEGORY

  useEffect(() => {
    if (
      dateChoose.day !== '' &&
      dateChoose.mounth !== '' &&
      dateChoose.year !== '' &&
      dateChoose.isModalOpen
    ) {
      setDateChoose({
        ...dateChoose,
        isModalOpen: false,
        changeData: true,
      });
    }
    // eslint-disable-next-line
  }, [dateChoose.day, dateChoose.mounth, dateChoose.year]);

  useEffect(() => {
    const { day, mounth, year } = dateChoose.newDate;
    if (day !== '' && mounth !== '' && year !== '') {
      const newDate = new Date(`${mounth} ${day}, ${year}`);
      console.log('ready');
      setDateChoose({
        ...dateChoose,
        newDate: {
          ...dateChoose.newDate,
          finish: newDate.toISOString(),
        },
      });
    }
    // eslint-disable-next-line
  }, [
    dateChoose.newDate.day,
    dateChoose.newDate.mounth,
    dateChoose.newDate.year,
  ]);

  function chooseDay() {
    // eslint-disable-next-line
    Date.prototype.daysInMonth = function () {
      return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };
    let value = new Date().daysInMonth();
    const arr = [...Array(value)].reduce((acc, _, i) => {
      const num = i < 31 && i + 1;
      acc.push(Number(num));
      return acc;
    }, []);
    return arr;
  }

  const handleChooseDateModalOpen = e => {
    e.preventDefault();
    setDateChoose({
      ...dateChoose,
      day: '',
      mounth: '',
      year: '',
      isModalOpen: !dateChoose.isModalOpen,
    });
  };

  useEffect(() => {
    if (dateChoose.newDate.finish !== null) {
      setTransaction({
        ...transaction,
        transactionDate: dateChoose.newDate.finish,
      });
    }
    // eslint-disable-next-line
  }, [dateChoose.newDate.finish]);

  console.log('transaction:', transaction);
  console.log('dateChoose:', dateChoose);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(createTransactionsOperation(transaction));
        }}
      >
        <div>
          <span>INCOME</span>
          <button
            type="button"
            onClick={() => {
              if (transaction.type === 'INCOME') {
                setTransaction({
                  ...transaction,
                  type: 'EXPENSE',
                  categoryId: '',
                });
              } else {
                setTransaction({
                  ...transaction,
                  type: 'INCOME',
                  categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
                });
              }
            }}
          >
            {transaction.type === 'EXPENSE' ? '-' : '+'}
          </button>
          <span>EXPENSE</span>
        </div>
        <div></div>
        <input
          value={transaction.amount}
          onChange={e => {
            e.preventDefault();
            setTransaction({ ...transaction, amount: e.target.value });
          }}
          type="number"
          placeholder="0.00"
        />
        <div
          onMouseLeave={() => {
            if (
              (dateChoose.day !== '',
              dateChoose.mounth !== '' && dateChoose.year !== '')
            ) {
              setDateChoose({ ...dateChoose, isModalOpen: false });
            }
          }}
          style={{ backgroundColor: 'lightblue' }}
        >
          <span>
            {dateChoose.day}.{dateChoose.mounth}.{dateChoose.year}
          </span>
          <button onClick={handleChooseDateModalOpen}>date</button>
          <button
            onClick={e => {
              e.preventDefault();
              setTransaction({ ...transaction, transactionDate: date() });
            }}
          >
            reload
          </button>
          {dateChoose.isModalOpen && (
            <div
              style={{
                backgroundColor: 'lightcoral',
                width: 'max-content',
                display: 'flex',
              }}
            >
              <ul style={{ overflow: 'auto', height: 120, width: 200 }}>
                {chooseDay().map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          if (Number(e.target.innerText) < 10) {
                            setDateChoose({
                              ...dateChoose,
                              day: `0${e.target.innerText}`,
                              newDate: {
                                ...dateChoose.newDate,
                                day: `0${e.target.innerText}`,
                              },
                            });
                          } else {
                            setDateChoose({
                              ...dateChoose,
                              day: e.target.innerText,
                              newDate: {
                                ...dateChoose.newDate,
                                day: e.target.innerText,
                              },
                            });
                          }

                          console.log(e.target.innerText);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul style={{ overflow: 'auto', height: 120, width: 200 }}>
                {dateChooseData.mounth.map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          convertMounth(e);
                          setDateChoose({
                            ...dateChoose,
                            mounth: convertMounth(e),
                            newDate: {
                              ...dateChoose.newDate,
                              mounth: e.target.innerText,
                            },
                          });
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul style={{ overflow: 'auto', height: 120, width: 200 }}>
                {dateChooseData.year.map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          const year = new Date();
                          if (e.target.innerText > year.getFullYear()) {
                            console.log('year in features');
                            return;
                          } else {
                            setDateChoose({
                              ...dateChoose,
                              year: Number(e.target.innerText),
                              newDate: {
                                ...dateChoose.newDate,
                                year: e.target.innerText,
                              },
                            });
                          }
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <textarea
          value={transaction.comment}
          onChange={e => {
            setTransaction({ ...transaction, comment: e.target.value });
          }}
          style={{ resize: 'none' }}
          placeholder="Comment"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
