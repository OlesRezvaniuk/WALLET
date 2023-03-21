import { AddTransactionsModal } from 'components/AddTransactionsModal/AddTransactionsModal';
import { useState } from 'react';
import {
  HomePageContainer,
  AddTransactionBtn,
  PlusIcon,
} from './HomePage.styled';
import { useEffect } from 'react';

import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';

export const HomePage = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const keydownEscape = e => {
    if (e.code === 'Escape') {
      SetIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keydownEscape);
    return () => {
      window.removeEventListener('keydown', keydownEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePageContainer>
      <TransactionsTable />
      <br />
      <AddTransactionBtn
        onClick={() => {
          SetIsModalOpen(!isModalOpen);
          document.querySelector('body').classList.add('modal');
        }}
      >
        <PlusIcon />
      </AddTransactionBtn>
      {isModalOpen && <AddTransactionsModal SetIsModalOpen={SetIsModalOpen} />}
    </HomePageContainer>
  );
};
