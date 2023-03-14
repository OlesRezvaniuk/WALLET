import { useState, useEffect } from 'react';
import { dateChooseData } from 'components/DateChoose/DateChooseData';

export const AddTransactionsModal = ({ date }) => {
  const [dateChoose, setDateChoose] = useState({
    day: '',
    mounth: '',
    year: '',
    isModalOpen: false,
  });
  const [transaction, setTransaction] = useState({
    transactionDate: date(),
    type: 'Income',
    categoryId: '',
    comment: '',
    amount: '',
  });

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
      });
    }
  }, [dateChoose.day, dateChoose.mounth, dateChoose.year]);

  function chooseDay() {
    Date.prototype.daysInMonth = function () {
      return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };
    let value = new Date().daysInMonth();
    function arr() {
      let arr = [];
      for (let i = 1; i <= value; i++) {
        arr.push(i);
      }
      return arr;
    }
    return arr();
  }

  const year = new Date();

  const handleChooseDateModalOpen = e => {
    e.preventDefault();
    setDateChoose({
      day: '',
      mounth: '',
      year: '',
      isModalOpen: !dateChoose.isModalOpen,
    });
  };

  console.log(dateChoose);

  return (
    <>
      <form>
        <div>
          <span>Income</span>
          <button
            type="button"
            onClick={() => {
              if (transaction.type === 'Income') {
                setTransaction({ ...transaction, type: 'Expense' });
              } else {
                setTransaction({ ...transaction, type: 'Income' });
              }
            }}
          >
            {transaction.type === 'Expense' ? '-' : '+'}
          </button>
          <span>Expense</span>
        </div>
        <input
          value={transaction.amount}
          onChange={e => {
            e.preventDefault();
            setTransaction({ ...transaction, amount: e.target.value });
          }}
          type="number"
          placeholder="0.00"
        />
        <div style={{ backgroundColor: 'lightblue' }}>
          <span>{transaction.transactionDate}</span>
          <button onClick={handleChooseDateModalOpen}>date</button>
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
                          setDateChoose({
                            ...dateChoose,
                            day: e.target.innerText,
                          });
                          if (
                            dateChoose.day !== '' &&
                            dateChoose.mounth !== '' &&
                            dateChoose.year !== ''
                          ) {
                            setDateChoose({
                              ...dateChoose,
                              isModalOpen: false,
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
              <ul style={{ overflow: 'auto', height: 120, width: 200 }}>
                {dateChooseData.mounth.map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          setDateChoose({
                            ...dateChoose,
                            mounth: e.target.innerText,
                          });
                          if (
                            dateChoose.day !== '' &&
                            dateChoose.mounth !== '' &&
                            dateChoose.year !== ''
                          ) {
                            setDateChoose({
                              ...dateChoose,
                              isModalOpen: false,
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
              <ul style={{ overflow: 'auto', height: 120, width: 200 }}>
                {dateChooseData.year.map(item => {
                  return (
                    <li key={item}>
                      <button
                        onClick={e => {
                          e.preventDefault();
                          if (e.target.innerText > year.getFullYear()) {
                            console.log('yesr in features');
                            return;
                          } else {
                            setDateChoose({
                              ...dateChoose,
                              year: e.target.innerText,
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
      </form>
    </>
  );
};
