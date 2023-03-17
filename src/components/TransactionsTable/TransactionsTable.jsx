import { useSelector } from 'react-redux';
import { userTransactionsSelector } from 'redux/transactions/transactionsSelector';
import { categoriesSelector } from 'redux/transactions/transactionsSelector';

export const TransactionsTable = () => {
  const transactions = useSelector(userTransactionsSelector);
  const categories = useSelector(categoriesSelector);

  // function TransactionsData() {
  //   if (transactions !== null) {
  //     const transactionsData = transactions.transaction.data.slice(0, 30);
  //     transactionsData.sort(
  //       (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  //     );
  //     return transactionsData;
  //   }
  // }
  // console.log(TransactionsData());

  // function getCategory(e) {
  //   if (categories !== null) {
  //     const data = categories.map(item => {
  //       if (e === item.id) {
  //         return item.name;
  //       }
  //     });
  //     return data;
  //   }
  // }

  return (
    <>
      <>Transactions Table</>

      {/* <table style={{ width: '100%' }}>
        <tr>
          <th style={{ textAlign: 'start' }}>Date</th>
          <th style={{ textAlign: 'start' }}>Type</th>
          <th style={{ textAlign: 'start' }}>Category</th>
          <th style={{ textAlign: 'start' }}>Comment</th>
          <th style={{ textAlign: 'start' }}>Summ</th>
        </tr>

        {transactions !== null &&
          TransactionsData().map(item => {
            return (
              <tr>
                <td>{item.transactionDate}</td>
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
      </table> */}
    </>
  );
};
