import { useSelector, useDispatch } from 'react-redux';
import {
  userTransactionsSelector,
  allUserTransactionsArr,
} from 'redux/transactions/transactionsSelector';
import {
  deteteUserTransactions,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';

export const TransactionsTable = () => {
  const transactions = useSelector(userTransactionsSelector);
  const allTr = useSelector(allUserTransactionsArr);
  const dispatch = useDispatch();

  function TransactionsData() {
    if (allTr !== null) {
      const transactionsData = allTr.slice(0, 30);
      transactionsData.sort(
        (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
      );
      return transactionsData;
    }
  }

  function getCategory(e) {
    if (transactions.getCategories !== null) {
      // eslint-disable-next-line
      const data = transactions.getCategories.map(item => {
        if (e === item.id) {
          return item.name;
        }
      });
      return data;
    }
  }

  const handleDeleteTransaction = async e => {
    await dispatch(deteteUserTransactions(e.target.id));
    dispatch(getUserTransactions());
  };

  return (
    <>
      <>Transactions Table</>

      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'start' }}>Date</th>
            <th style={{ textAlign: 'start' }}>Type</th>
            <th style={{ textAlign: 'start' }}>Category</th>
            <th style={{ textAlign: 'start' }}>Comment</th>
            <th style={{ textAlign: 'start' }}>Summ</th>
          </tr>
        </thead>
        <tbody>
          {transactions.transaction !== null &&
            TransactionsData().map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.transactionDate.replace(/-/g, '.')}</td>
                  <td>
                    {item.type === 'INCOME' && '+'}
                    {item.type === 'EXPENSE' && '-'}
                  </td>
                  <td>{getCategory(item.categoryId)}</td>
                  <td>{item.comment}</td>
                  <td style={{ color: item.amount < 0 && 'red' }}>
                    {Math.abs(item.amount)}
                    <button type="button">edit</button>
                    <button
                      id={item.id}
                      type="button"
                      onClick={handleDeleteTransaction}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
