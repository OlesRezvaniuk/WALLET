export const AddTransitionValidation = ({
  request,
  setErrorMessage,
  errorMessage,
}) => {
  if (request.type === 'INCOME' && request.amount === '') {
    setErrorMessage({
      ...errorMessage,
      message: 'You must enter the amount',
      amount: true,
    });
    return 'You must enter the amount';
  } else {
    setErrorMessage({
      ...errorMessage,
      message: '',
      amount: false,
      category: false,
    });
  }
};
