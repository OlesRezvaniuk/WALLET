import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactionsCategories } from 'redux/transactions/transactionsOperations';

export const AddTransactionsExpense = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsCategories());
  });

  return (
    <>
      <></>
    </>
  );
};
