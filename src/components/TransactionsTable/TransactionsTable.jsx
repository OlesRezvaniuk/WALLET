import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userTransactionsSelector } from 'redux/transactions/transactionsSelector';
import { useDispatch } from 'react-redux';

export const TransactionsTable = () => {
  const transactions = useSelector(userTransactionsSelector);
  const dispatch = useDispatch();

  function TransactionsData() {
    if (transactions.transaction !== null) {
      const transactionsData = transactions.transaction.data.slice(0, 30);
      transactionsData.sort(
        (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
      );
      return transactionsData;
    }
  }

  function getCategory(e) {
    if (transactions.getCategories !== null) {
      const data = transactions.getCategories.map(item => {
        if (e === item.id) {
          return item.name;
        }
      });
      return data;
    }
  }

  return (
    <>
      <>Transactions Table</>

      <table style={{ width: '100%' }}>
        <tr>
          <th style={{ textAlign: 'start' }}>Date</th>
          <th style={{ textAlign: 'start' }}>Type</th>
          <th style={{ textAlign: 'start' }}>Category</th>
          <th style={{ textAlign: 'start' }}>Comment</th>
          <th style={{ textAlign: 'start' }}>Summ</th>
        </tr>

        {transactions.transaction !== null &&
          TransactionsData().map(item => {
            return (
              <tr>
                <td>{item.transactionDate.replace(/-/g, '.')}</td>
                <td>
                  {item.type === 'INCOME' && '+'}
                  {item.type === 'EXPENSE' && '-'}
                </td>
                <td>{getCategory(item.categoryId)}</td>
                <td>comment</td>
                <td>summ</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};
