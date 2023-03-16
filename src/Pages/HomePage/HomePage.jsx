import { Chart } from 'components/Chart/Chart';
import { Currency } from 'Pages/Currency/Currency';
import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';
import { useState } from 'react';

export const HomePage = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      <Currency />
      <Chart />
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
