import { Chart } from 'components/Chart/Chart';
import { Currency } from 'Pages/Currency/Currency';
import { useState } from 'react';
import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';

export const HomePage = () => {
  const [isModalOpen, SetIsModalOpen] = useState();
  const date = () => {
    const date = new Date();
    const data = `${date.getUTCDate()}.${
      date.getUTCMonth() + 1
    }.${date.getUTCFullYear()}`;
    return data;
  };
  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      <Currency />
      <Chart />
      <AddTransactionsModal date={date} />
    </div>
  );
};
