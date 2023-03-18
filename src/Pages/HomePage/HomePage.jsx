import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';
import { useState } from 'react';

import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';

export const HomePage = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

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
