import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';
import { useEffect, useState } from 'react';
import { getUserTransactions } from 'redux/transactions/transactionsOperations';
import { useDispatch } from 'react-redux';
import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';

export const HomePage = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTransactions());
  }, []);

  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      <TransactionsTable />
      <br />
      <button
        onClick={() => {
          SetIsModalOpen(!isModalOpen);
        }}
      >
        (+)
      </button>
      {isModalOpen && <AddTransactionsModal />}
    </div>
  );
};
