import {
  CrossIcon,
  CheckmarkIcon,
  Backdrop,
  Modal,
  ConfirmButton,
} from './TransitionTableDeleteModal.styled';
import { useEffect } from 'react';

export const TransitionTableDeleteModal = ({
  editTr,
  setEditTr,
  handleDeleteTransaction,
}) => {
  const keydownEscape = e => {
    if (e.code === 'Escape') {
      setEditTr({
        ...editTr,
        deleteModal: { ...editTr.deleteModal, state: false },
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
    <>
      {editTr.deleteModal && (
        <Backdrop
          id="deleteTransactionBackdrop"
          onClick={e => {
            if (e.target.id === 'deleteTransactionBackdrop') {
              setEditTr({
                ...editTr,
                deleteModal: { ...editTr.deleteModal, state: false },
              });
            }
          }}
        >
          <Modal>
            <span>Confirm delete?</span>
            <ConfirmButton
              onClick={e => {
                handleDeleteTransaction(e);
              }}
              type="button"
              id="deleteTransitionBtn"
            >
              <CheckmarkIcon />
            </ConfirmButton>
            <ConfirmButton
              onClick={e => {
                handleDeleteTransaction(e);
              }}
              type="button"
              id="cancelDeleteTransitionBtn"
            >
              <CrossIcon />
            </ConfirmButton>
          </Modal>
        </Backdrop>
      )}
    </>
  );
};
