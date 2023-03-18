import { useDispatch } from 'react-redux';
import {
  editUserTransactions,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';
export const EditTransaction = ({ editTr, setEditTr }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <h3>Edit Transaction</h3>
        <input
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
        <input
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
          placeholder="Summ"
        />
        <button
          type="button"
          onClick={() => {
            setEditTr({ ...editTr, amount: '' });
          }}
        >
          X
        </button>
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
      </form>
    </div>
  );
};
