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
import { authUserTransactions } from 'redux/auth/authSelector';
import {
  StatisticsTableBox,
  ColorBox,
  TableTd,
  TableHeadTh,
  TableHeadTr,
  Table,
  ControllsBoxList,
  ControllsButton,
  ArrowIcon,
  ControllsList,
  ControllsListItem,
  ControllsListBox,
  IndexesList,
  IndexesListItem,
  ControllsBoxItem,
} from './StatisticsTable.styled';

export const StatisticsTable = ({ data }) => {
  const [expenseSummaryDate, setExpenseSummaryDate] = useState({
    month: '',
    year: '',
  });
  const [isModalOpen, setIsModalOpen] = useState({ month: false, year: false });
  const dispatch = useDispatch();
  const summaryResponse = useSelector(userSummaryForPeriodSelector);
  const user = useSelector(authUserTransactions);

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
      dispatch(getUserTransactionsSummary(date));
    } else if (expenseSummaryDate.month !== '') {
      const date = {
        month: mounthNameToIndex(expenseSummaryDate.month),
        year: new Date().getFullYear(),
      };
      dispatch(getUserTransactionsSummary(date));
    } else if (expenseSummaryDate.year !== '') {
      const date = {
        month: new Date().getMonth() + 1,
        year: Number(expenseSummaryDate.year),
      };
      dispatch(getUserTransactionsSummary(date));
    }
    // eslint-disable-next-line
  }, [expenseSummaryDate]);

  useEffect(() => {
    if (user) {
      dispatch(
        getUserTransactionsSummary({
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        })
      );
    }
    // eslint-disable-next-line
  }, []);

  return (
    <StatisticsTableBox>
      <ControllsBoxList>
        <ControllsBoxItem>
          <ControllsButton
            color="rgb(74, 86, 226)"
            id="changeMonthBtn"
            onClick={handleModalOpen}
          >
            {expenseSummaryDate.month === ''
              ? monthIndexToName()
              : expenseSummaryDate.month}
            <ArrowIcon
              style={{
                transform: isModalOpen.month && 'rotate(180deg)',
              }}
            />
          </ControllsButton>
          {isModalOpen.month && (
            <ControllsListBox>
              <ControllsList>
                {dateChooseData.mounth.map(item => {
                  return (
                    <ControllsListItem color="rgb(74, 86, 226)" key={item}>
                      <p
                        id="monthVariantSummary"
                        onClick={getStatisticForPeriod}
                      >
                        {item}
                      </p>
                    </ControllsListItem>
                  );
                })}
              </ControllsList>
            </ControllsListBox>
          )}
        </ControllsBoxItem>
        <ControllsBoxItem>
          <ControllsButton
            color="rgb(36, 204, 167)"
            id="changeYearBtn"
            onClick={handleModalOpen}
          >
            {expenseSummaryDate.year !== ''
              ? `${expenseSummaryDate.year}`
              : new Date().getFullYear()}
            <ArrowIcon
              style={{
                transform: isModalOpen.year && 'rotate(180deg)',
              }}
            />
          </ControllsButton>
          {isModalOpen.year && (
            <ControllsList>
              {reduceToYear().map(item => {
                return (
                  <ControllsListItem color="rgb(36, 204, 167)" key={item}>
                    <p id="yearVariantSummary" onClick={getStatisticForPeriod}>
                      {item}
                    </p>
                  </ControllsListItem>
                );
              })}
            </ControllsList>
          )}
        </ControllsBoxItem>
      </ControllsBoxList>
      {summaryResponse !== null && (
        <>
          <Table>
            <thead>
              <TableHeadTr>
                <TableHeadTh>Category</TableHeadTh>
                <TableHeadTh>Summ</TableHeadTh>
              </TableHeadTr>
            </thead>
            <tbody>
              {data.items.map(item => {
                return (
                  <tr key={nanoid()}>
                    <TableTd style={{ display: 'flex' }}>
                      <ColorBox color={item.color}></ColorBox>
                      {item.name}
                    </TableTd>
                    <TableTd>{Math.abs(item.total)}</TableTd>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <IndexesList>
            <IndexesListItem>
              <p>Expenses: </p>
              <span style={{ color: 'tomato' }}>
                {Math.abs(allSumm().expense)}
              </span>
            </IndexesListItem>
            <IndexesListItem>
              <p>Income:</p>
              <span>{Math.abs(allSumm().income)}</span>
            </IndexesListItem>
          </IndexesList>
        </>
      )}
    </StatisticsTableBox>
  );
};
