import { useDispatch } from 'react-redux';
import {
  editUserTransactions,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';
import { useEffect } from 'react';
import {
  Backdrop,
  Form,
  Title,
  ButtonsBox,
  CloseIcon,
  CloseButton,
  Label,
  Input,
} from './TransactionTableEditModal.styled';

export const TransactionTableEditModal = ({ editTr, setEditTr }) => {
  const dispatch = useDispatch();

  const keydownEscape = e => {
    if (e.code === 'Escape') {
      setEditTr({
        ...editTr,
        state: false,
      });
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
    <Backdrop
      id="editTransactionBackdrop"
      onClick={e => {
        if (e.target.id === 'editTransactionBackdrop') {
          setEditTr({
            ...editTr,
            state: false,
          });
        }
      }}
    >
      <Form>
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
        <Title>Edit Transaction</Title>
        <Label>
          <Input
            value={editTr.comment}
            onChange={e => {
              setEditTr({ ...editTr, comment: e.target.value });
            }}
            placeholder="Comment"
          />
          <button
            type="button"
            onClick={() => {
              setEditTr({ ...editTr, comment: '' });
            }}
          >
            X
          </button>
        </Label>
        <Label>
          <Input
            value={editTr.amount}
            onChange={e => {
              setEditTr({ ...editTr, amount: e.target.value });
            }}
            onBlur={e => {
              if (editTr.type === 'EXPENSE') {
                setEditTr({ ...editTr, amount: Number(e.target.value * -1) });
              } else {
                setEditTr({ ...editTr, amount: Number(e.target.value) });
              }
            }}
            placeholder="Sum"
          />
          <button
            type="button"
            onClick={() => {
              setEditTr({ ...editTr, amount: '' });
            }}
          >
            X
          </button>
        </Label>
        <ButtonsBox>
          <button
            type="button"
            onClick={async () => {
              const transaction = {
                request: { amount: editTr.amount, comment: editTr.comment },
                id: editTr.id,
              };
              await dispatch(editUserTransactions(transaction));
              await dispatch(getUserTransactions());
              setEditTr({ ...editTr, state: false });
            }}
          >
            ok
          </button>

          <button
            onClick={() => {
              setEditTr({ ...editTr, state: false });
            }}
          >
            cancel
          </button>
        </ButtonsBox>
      </Form>
    </Backdrop>
  );
};
