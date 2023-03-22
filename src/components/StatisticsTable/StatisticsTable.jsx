import { useEffect, useState } from 'react';
import { userSummaryForPeriodSelector } from 'redux/transactions/transactionsSelector';
import { useDispatch, useSelector } from 'react-redux';
import { dateChooseData } from 'components/Calendar/calendarHelpers/calendarHelpers';
import {
  monthIndexToName,
  mounthNameToIndex,
} from 'components/Calendar/calendarHelpers/calendarHelpers';
import { getUserTransactionsSummary } from 'redux/transactions/transactionsOperations';
import { nanoid } from '@reduxjs/toolkit';

export const StatisticsTable = () => {
  const [expenseSummaryDate, setExpenseSummaryDate] = useState({
    month: '',
    year: '',
  });
  const [isModalOpen, setIsModalOpen] = useState({ month: false, year: false });
  const dispatch = useDispatch();
  const summaryResponse = useSelector(userSummaryForPeriodSelector);

  function expensData() {
    let data = { expense: null, income: null };
    if (summaryResponse) {
      data.expense = summaryResponse.categoriesSummary.filter(
        item => item.type === 'EXPENSE'
      );
      data.income = summaryResponse.categoriesSummary.filter(
        item => item.type === 'INCOME'
      );
      return data;
    }
  }

  function allSumm() {
    let total = { expense: null, income: null };
    if (summaryResponse !== null) {
      total.expense = expensData().expense.reduce((acc, curr) => {
        return acc + Math.abs(curr.total);
      }, 0);

      total.income = expensData().income.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
      return total;
    }
  }

  const getStatisticForPeriod = e => {
    if (e.target.id === 'monthVariantSummary') {
      setExpenseSummaryDate({
        ...expenseSummaryDate,
        month: e.target.innerText,
      });
      setIsModalOpen({ ...isModalOpen, month: false });
    }
    if (e.target.id === 'yearVariantSummary') {
      setExpenseSummaryDate({
        ...expenseSummaryDate,
        year: e.target.innerText,
      });
      setIsModalOpen({ ...isModalOpen, year: false });
    }
  };

  const handleModalOpen = e => {
    if (e.target.id === 'changeMonthBtn' && isModalOpen.year !== true) {
      setIsModalOpen({ ...isModalOpen, month: !isModalOpen.month });
    } else if (e.target.id === 'changeYearBtn' && isModalOpen.month !== true) {
      setIsModalOpen({ ...isModalOpen, year: !isModalOpen.year });
    }
  };

  function reduceToYear() {
    let year = new Date().getFullYear();
    return Array.from(
      { length: year - (year - 6) },
      (_, i) => year - 6 + 1 + i
    );
  }

  useEffect(() => {
    if (expenseSummaryDate.month !== '' && expenseSummaryDate.year !== '') {
      const date = {
        month: mounthNameToIndex(expenseSummaryDate.month),
        year: Number(expenseSummaryDate.year),
      };
      console.log(date);
      dispatch(getUserTransactionsSummary(date));
    }
    // eslint-disable-next-line
  }, [expenseSummaryDate]);

  useEffect(() => {
    dispatch(
      getUserTransactionsSummary({
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      })
    );
    // eslint-disable-next-line
  }, []);

  console.log(summaryResponse.categoriesSummary);
  return (
    <>
      <>Statistics Table</>
      <div>
        <button id="changeMonthBtn" onClick={handleModalOpen}>
          {expenseSummaryDate.month === ''
            ? monthIndexToName()
            : expenseSummaryDate.month}
        </button>
        {isModalOpen.month && (
          <ul>
            {dateChooseData.mounth.map(item => {
              return (
                <li key={item}>
                  <p id="monthVariantSummary" onClick={getStatisticForPeriod}>
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
        <button id="changeYearBtn" onClick={handleModalOpen}>
          {expenseSummaryDate.year !== ''
            ? `${expenseSummaryDate.year}`
            : new Date().getFullYear()}
        </button>
        {isModalOpen.year && (
          <ul>
            {reduceToYear().map(item => {
              return (
                <li key={item}>
                  <p id="yearVariantSummary" onClick={getStatisticForPeriod}>
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
        <div></div>
      </div>
      {summaryResponse !== null && (
        <>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'start' }}>Category</th>
                <th style={{ textAlign: 'start' }}>Summ</th>
              </tr>
            </thead>
            <tbody>
              {expensData().expense.map(item => {
                return (
                  <tr key={nanoid()}>
                    <td>{item.name}</td>
                    <td>{Math.abs(item.total)}</td>
                  </tr>
                );
              })}
            </tbody>
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
