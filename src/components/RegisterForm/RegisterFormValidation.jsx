export const uncorrect = e => {
  e.parentElement.style.borderBottom = '1px solid tomato';
  e.parentElement.style.fill = 'rgb(209 58 58)';
  e.parentElement.style.color = 'rgb(209 58 58)';
};
export const correct = e => {
  e.parentElement.style.borderBottom = '1px solid rgb(36, 204, 167)';
  e.parentElement.style.fill = 'rgb(36, 204, 167)';
  e.parentElement.style.color = 'rgb(36, 204, 167)';
};

export const emailValidation = ({ setEmail, e, request }) => {
  if (request === 'wrong') {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Wrong email, example: kuzia@rusni.net',
    });
    uncorrect(e.target);
  } else if (request === 'more') {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email should be more than 10 characters',
    });
    uncorrect(e.target);
  } else if (request === 'less') {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email should be less  64 characters',
    });
    uncorrect(e.target);
  } else if (request === 'required') {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email is a required field',
    });
    uncorrect(e.target);
  }
  console.log(request);
};
