export const AddTransitionValidation = ({ request, setErrorMessage, send }) => {
  if (request.type === 'INCOME') {
    if (request.amount !== '') {
      setErrorMessage(false);
      send();
    }
  } else if (request.type === 'EXPENSE') {
    if (request.amount !== '' && request.categoryId !== '') {
      setErrorMessage(false);
      send();
    }
  }
};
