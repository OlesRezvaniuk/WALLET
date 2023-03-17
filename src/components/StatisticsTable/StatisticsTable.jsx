import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userSummaryForPeriodSelector } from 'redux/transactions/transactionsSelector';
import { useDispatch } from 'react-redux';
import { dateChooseData } from 'components/Calendar/calendarHelpers/calendarHelpers';
import {
  monthIndexToName,
  mounthNameToIndex,
} from 'components/Calendar/calendarHelpers/calendarHelpers';

export const StatisticsTable = () => {
  const [expenseSummaryDate, setExpenseSummaryDate] = useState({
    year: null,
    mouth: { ismodalOpen: false, value: null },
  });
  const dispatch = useDispatch();
  const summaryResponse = useSelector(userSummaryForPeriodSelector);

  function expensData() {
    let data = { expense: null, income: null };
    if (summaryResponse !== null) {
      data.expense = summaryResponse.data.categoriesSummary.filter(
        item => item.type === 'EXPENSE'
      );
      data.income = summaryResponse.data.categoriesSummary.filter(
        item => item.type === 'INCOME'
      );
      //   console.log(data);
      return data;
    }
  }

  function allSumm() {
    let total = { expense: null, income: null };
    if (summaryResponse !== null) {
      total.expense = expensData().expense.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
      total.income = expensData().income.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
      return total;
    }
  }

  const getStatisticForPeriod = e => {
    //   mounthNameToIndex(e.target.innerText);
    //   setExpenseSummaryDate({
    //     ...expenseSummaryDate,
    //     month: {
    //       ...expenseSummaryDate.month,
    //       value: mounthNameToIndex(e.target.innerText),
    //     },
    //   });
  };

  const handleModalOpen = e => {
    if (e.target.id === 'changeMonthBtn') {
      console.log('change month');
    } else if (e.target.id === 'changeYearBtn') {
      console.log('change year');
    }
  };

  console.log(expenseSummaryDate);

  return (
    <>
      <>Statistics Table</>
      <div>
        <button id="changeMonthBtn" onClick={handleModalOpen}>
          {monthIndexToName()}
        </button>
        <ul>
          {dateChooseData.mounth.map(item => {
            return (
              <li key={item}>
                <p onClick={getStatisticForPeriod}>{item}</p>
              </li>
            );
          })}
        </ul>
        <button id="changeYearBtn" onClick={handleModalOpen}>
          Year
        </button>
        <div></div>
      </div>
      {summaryResponse !== null && (
        <>
          <table style={{ width: '100%' }}>
            <tr>
              <th style={{ textAlign: 'start' }}>Category</th>
              <th style={{ textAlign: 'start' }}>Summ</th>
            </tr>

            {expensData().expense.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  {Math.abs(item.total)}
                </tr>
              );
            })}
          </table>
          <div>
            <ul>
              <li>
                <p>
                  Expenses:{' '}
                  <span style={{ color: 'tomato' }}>
                    {Math.abs(allSumm().expense)}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Income: <span>{Math.abs(allSumm().income)}</span>
                </p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
