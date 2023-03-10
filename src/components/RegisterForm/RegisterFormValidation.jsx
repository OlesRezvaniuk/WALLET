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

export const emailValidation = ({ email, setEmail, e, request }) => {
  setEmail({ value: e.target.value, isCorrect: false, message: '' });
  // eslint-disable-next-line
  let re = /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.length === 0) {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email is a required field',
    });
    uncorrect(e.target);
  } else if (!re.test(String(e.target.value).toLocaleLowerCase())) {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Wrong email, example: kuzia@rusni.net',
    });
    uncorrect(e.target);
  } else if (email.value.length < 10) {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email should be more than 10 characters',
    });
    uncorrect(e.target);
  } else if (email.value.length > 64) {
    setEmail({
      value: e.target.value,
      isCorrect: false,
      message: 'Email should be less  64 characters',
    });
    uncorrect(e.target);
  } else {
    setEmail({
      ...email,
      value: e.target.value,
      isCorrect: true,
      message: 'accepted',
    });
    correct(e.target);
  }
};

export const validationPassword = ({ password, setPassword, e, request }) => {
  let pattern = /^\w*$/;
  if (e.target.value.length === 0) {
    setPassword({
      ...password,
      value: e.target.value.trim(),
      isCorrect: false,
      message: 'Password must contain numbers and/or letters without spaces',
    });
    uncorrect(e.target);
  } else if (password.value.length < 6) {
    setPassword({
      ...password,
      value: e.target.value.trim(),

      isCorrect: false,
      message: 'Password should be more than 6 characters',
    });
    uncorrect(e.target);
  } else if (password.value.length > 12) {
    setPassword({
      ...password,
      value: e.target.value.trim(),
      isCorrect: false,
      message: 'Password should be less  64 characters',
    });
    uncorrect(e.target);
  } else if (pattern.test(e.target.value)) {
    setPassword({
      ...password,
      value: e.target.value.trim(),

      isCorrect: true,
      message: 'accepted',
    });
    correct(e.target);
  }
};

export const confirmPassword = ({ password, setPassword, e, request }) => {
  setPassword({ ...password, confirmValue: e.target.value });
  if (password.value === password.confirmValue) {
    setPassword({
      ...password,
      confirmValue: e.target.value,
      accepted: true,
      confirmMessage: 'accepted',
    });
    correct(e.target);
  } else {
    setPassword({
      ...password,
      confirmValue: e.target.value,
      confirmMessage: 'Passwords do not match',
      accepted: false,
    });
    uncorrect(e.target);
  }
};

export const validationUsername = ({ username, setUsername, e, request }) => {
  if (e.target.value.length === 0) {
    setUsername({ ...username, value: e.target.value, accepted: false });
    uncorrect(e.target);
    console.log('<1');
  } else if (e.target.value.length > 0 && e.target.value.length <= 12) {
    setUsername({ ...username, value: e.target.value, accepted: true });
    console.log('1 - 12');
    correct(e.target);
  } else if (e.target.value.length > 12) {
    setUsername({ ...username, value: e.target.value, accepted: false });
    console.log('> 12');
    uncorrect(e.target);
  }
};
