import { useSelector, useDispatch } from 'react-redux';
import {
  TransitionList,
  TableT,
  TransitionItemList,
  TableHeadMobile,
  TransitionItem,
  TableHeadMobileList,
  TableHeadMobileListItem,
  TableBody,
  TableBodyList,
  TableBodyListItem,
} from './TransactionsTable.styled';
import {
  userTransactionsSelector,
  allUserTransactionsArr,
} from 'redux/transactions/transactionsSelector';
import {
  deteteUserTransactions,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';
import { EditTransaction } from 'components/EditTransactions/EditTransaction';
import { useState } from 'react';
import { useEffect } from 'react';

export const TransactionsTable = () => {
  const [screen, setScreen] = useState(true);
  const [editTr, setEditTr] = useState({
    state: false,
    id: '',
    amount: '',
    comment: '',
    type: '',
  });
  const transactions = useSelector(userTransactionsSelector);
  const allTr = useSelector(allUserTransactionsArr);
  const dispatch = useDispatch();

  console.log(screen);

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth > 597);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const handleEditTransaction = item => {
    setEditTr({
      ...editTr,
      state: true,
      id: item.id,
      amount: item.amount,
      comment: item.comment,
      type: item.type,
    });
  };

  return (
    <>
      <>Transactions Table</>
      {editTr.state && (
        <EditTransaction editTr={editTr} setEditTr={setEditTr} />
      )}

      {!screen && (
        <TransitionList>
          {transactions.transaction !== null &&
            TransactionsData().map(item => {
              return (
                <TransitionItem key={item.id}>
                  <TransitionItemList>
                    <TableHeadMobile>
                      <TableHeadMobileList>
                        <TableHeadMobileListItem>Date</TableHeadMobileListItem>
                        <TableHeadMobileListItem>Type</TableHeadMobileListItem>
                        <TableHeadMobileListItem>
                          Category
                        </TableHeadMobileListItem>
                        <TableHeadMobileListItem>
                          Comment
                        </TableHeadMobileListItem>
                        <TableHeadMobileListItem>Summ</TableHeadMobileListItem>
                        <TableHeadMobileListItem>
                          <button
                            onClick={() => {
                              handleEditTransaction(item);
                            }}
                            type="button"
                          >
                            edit
                          </button>
                        </TableHeadMobileListItem>
                      </TableHeadMobileList>
                    </TableHeadMobile>
                    <TableBody>
                      <TableBodyList>
                        <TableBodyListItem>
                          <p>{item.transactionDate.replace(/-/g, '.')}</p>
                        </TableBodyListItem>
                        <TableBodyListItem>
                          <p>
                            {item.type === 'INCOME' && '+'}
                            {item.type === 'EXPENSE' && '-'}
                          </p>
                        </TableBodyListItem>
                        <TableBodyListItem>
                          <p>{getCategory(item.categoryId)}</p>
                        </TableBodyListItem>
                        <TableBodyListItem>
                          <p>{item.comment}</p>
                        </TableBodyListItem>
                        <TableBodyListItem>
                          <p>{Math.abs(item.amount)}</p>
                        </TableBodyListItem>
                        <TableBodyListItem>
                          <button
                            id={item.id}
                            type="button"
                            onClick={handleDeleteTransaction}
                          >
                            delete
                          </button>
                        </TableBodyListItem>
                      </TableBodyList>
                    </TableBody>
                  </TransitionItemList>
                </TransitionItem>
              );
            })}
        </TransitionList>
      )}
      <TableT style={{ width: '100%' }}>
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
                    <button
                      onClick={() => {
                        handleEditTransaction(item);
                      }}
                      type="button"
                    >
                      edit
                    </button>
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
      </TableT>
    </>
  );
};
