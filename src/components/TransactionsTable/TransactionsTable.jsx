import { useSelector, useDispatch } from 'react-redux';
import {
  TransitionList,
  TransitionItemList,
  TableHeadMobile,
  TransitionItem,
  TableHeadMobileList,
  TableHeadMobileListItem,
  TableBody,
  TableBodyList,
  TableBodyListItem,
  TableFooterListItem,
  TableFooterList,
  TableFooterDeleteBtn,
  TableFooterEditBtn,
  EditIcon,
  TableFooterItem,
  TableTablet,
  TransitionTableTabletThead,
  TransitionTableTabletTheadItem,
  TransitionTableTabletTbody,
  TransitionTableTabletTbodyTd,
  TransitionTableTabletTbodyTr,
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
      {editTr.state && (
        <EditTransaction editTr={editTr} setEditTr={setEditTr} />
      )}
      {!screen && (
        <TransitionList>
          {transactions.transaction !== null &&
            TransactionsData().map(item => {
              return (
                <TransitionItem type={item.type} key={item.id}>
                  <TransitionItemList>
                    {!screen && (
                      <TableHeadMobile>
                        <TableHeadMobileList>
                          <TableHeadMobileListItem>
                            Date
                          </TableHeadMobileListItem>
                          <TableHeadMobileListItem>
                            Type
                          </TableHeadMobileListItem>
                          <TableHeadMobileListItem>
                            Category
                          </TableHeadMobileListItem>
                          <TableHeadMobileListItem>
                            Comment
                          </TableHeadMobileListItem>
                          <TableHeadMobileListItem>Sum</TableHeadMobileListItem>
                        </TableHeadMobileList>
                      </TableHeadMobile>
                    )}
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
                      </TableBodyList>
                    </TableBody>
                    <TableFooterItem>
                      <TableFooterList>
                        <TableFooterListItem>
                          <TableFooterDeleteBtn
                            id={item.id}
                            type="button"
                            onClick={handleDeleteTransaction}
                          >
                            delete
                          </TableFooterDeleteBtn>
                        </TableFooterListItem>
                        <TableFooterListItem>
                          <TableFooterEditBtn
                            onClick={() => {
                              handleEditTransaction(item);
                            }}
                            type="button"
                          >
                            <EditIcon />
                            edit
                          </TableFooterEditBtn>
                        </TableFooterListItem>
                      </TableFooterList>
                    </TableFooterItem>
                  </TransitionItemList>
                </TransitionItem>
              );
            })}
        </TransitionList>
      )}
      {screen && (
        <TableTablet>
          <TransitionTableTabletThead>
            <tr>
              <TransitionTableTabletTheadItem>
                Date
              </TransitionTableTabletTheadItem>
              <TransitionTableTabletTheadItem>
                Type
              </TransitionTableTabletTheadItem>
              <TransitionTableTabletTheadItem style={{ textAlign: 'start' }}>
                Category
              </TransitionTableTabletTheadItem>
              <TransitionTableTabletTheadItem style={{ textAlign: 'start' }}>
                Comment
              </TransitionTableTabletTheadItem>
              <TransitionTableTabletTheadItem style={{ textAlign: 'start' }}>
                Sum
              </TransitionTableTabletTheadItem>
            </tr>
          </TransitionTableTabletThead>
          <TransitionTableTabletTbody>
            {transactions.transaction !== null &&
              TransactionsData().map(item => {
                return (
                  <TransitionTableTabletTbodyTr key={item.id}>
                    <TransitionTableTabletTbodyTd>
                      {item.transactionDate
                        .replace(/-/g, '.')
                        .slice(
                          2,
                          item.transactionDate.replace(/-/g, '.').length
                        )}
                    </TransitionTableTabletTbodyTd>
                    <TransitionTableTabletTbodyTd>
                      {item.type === 'INCOME' && '+'}
                      {item.type === 'EXPENSE' && '-'}
                    </TransitionTableTabletTbodyTd>
                    <TransitionTableTabletTbodyTd>
                      {getCategory(item.categoryId)}
                    </TransitionTableTabletTbodyTd>
                    <TransitionTableTabletTbodyTd>
                      {item.comment}
                    </TransitionTableTabletTbodyTd>
                    <TransitionTableTabletTbodyTd
                      style={{
                        color: item.amount < 0 && 'red',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{Math.abs(item.amount)}</span>
                        <TableFooterList
                          style={{
                            padding: 0,
                            flexDirection: 'row-reverse',
                            marginRight: 20,
                          }}
                        >
                          <TableFooterListItem>
                            <TableFooterDeleteBtn
                              id={item.id}
                              type="button"
                              onClick={handleDeleteTransaction}
                            >
                              delete
                            </TableFooterDeleteBtn>
                          </TableFooterListItem>
                          <TableFooterListItem>
                            <TableFooterEditBtn
                              onClick={() => {
                                handleEditTransaction(item);
                              }}
                              type="button"
                            >
                              <EditIcon />
                            </TableFooterEditBtn>
                          </TableFooterListItem>
                        </TableFooterList>
                      </div>
                    </TransitionTableTabletTbodyTd>
                  </TransitionTableTabletTbodyTr>
                );
              })}
          </TransitionTableTabletTbody>
        </TableTablet>
      )}
    </>
  );
};
