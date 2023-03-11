import {
  FormContainer,
  LogoImg,
  EmailImg,
  PasswordImg,
  AcountImg,
  FormInputList,
  FormInputItem,
  FormInput,
  FormLabel,
  LinkStyled,
  FormBtn,
} from './RegisterForm.styled';
import { registerUserOperation } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  emailValidation,
  validationPassword,
  confirmPassword,
  validationUsername,
} from './RegisterFormValidation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState({ value: '', accepted: false });
  const [email, setEmail] = useState({
    value: '',
    isCorrect: false,
    message: '',
  });
  const [password, setPassword] = useState({
    value: '',
    confirmValue: '',
    isCorrect: false,
    message: '',
    confirmMessage: '',
    hidden: true,
    accepted: false,
  });

  const [user, setUser] = useState({
    username: null,
    email: null,
    password: null,
  });

  useEffect(() => {
    setUser({
      username: username.value,
      email: email.value,
      password: password.accepted ? password.value : '',
    });
    // eslint-disable-next-line
  }, [email, password, username]);

  const handleInput = e => {
    if (e.target.name === 'email') {
      emailValidation({ email, setEmail, e });
    } else if (e.target.name === 'password') {
      validationPassword({ password, setPassword, e });
    } else if (e.target.name === 'passwordConfirm') {
      confirmPassword({ password, setPassword, e });
    } else if (e.target.name === 'username') {
      validationUsername({ username, setUsername, e });
    }
  };

  const handleRegistration = e => {
    e.preventDefault();
    if (
      user.username !== null &&
      user.email !== null &&
      user.password !== null
    ) {
      dispatch(registerUserOperation(user));
    }
  };

  console.log(username);
  // console.log(email);

  return (
    <FormContainer>
      <LogoImg />
      <form onSubmit={handleRegistration}>
        <FormInputList>
          <FormInputItem>
            <FormLabel>
              <EmailImg />
              <FormInput
                placeholder="E-mail"
                label="Email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
                required
                name="email"
                onChange={handleInput}
                value={email.value}
                onBlur={handleInput}
              />
            </FormLabel>
            {!email.isCorrect && (
              <span
                style={{
                  position: 'absolute',
                  bottom: -16,
                  color: 'tomato',
                  fontSize: 12,
                }}
              >
                {email.message}
              </span>
            )}
          </FormInputItem>
          <FormInputItem>
            <FormLabel>
              <PasswordImg />
              <FormInput
                label="Password"
                type={password.hidden ? 'password' : 'text'}
                placeholder="Password"
                minLength={7}
                maxLength={63}
                name="password"
                onChange={handleInput}
                value={password.value}
                onBlur={handleInput}
              />
              <button
                onClick={() => {
                  setPassword({ ...password, hidden: !password.hidden });
                }}
                type="button"
              >
                {password.hidden ? 'show' : 'hide'}
              </button>
            </FormLabel>
            {!email.isCorrect && (
              <span
                style={{
                  position: 'absolute',
                  bottom: -16,
                  color: 'tomato',
                  fontSize: 12,
                }}
              >
                {password.message}
              </span>
            )}
          </FormInputItem>
          <FormInputItem>
            <FormLabel>
              <PasswordImg />
              <FormInput
                label="ConfirmPassword"
                type={password.hidden ? 'password' : 'text'}
                placeholder="Confirm password"
                minLength={7}
                maxLength={63}
                name="passwordConfirm"
                onChange={handleInput}
                value={password.confirmValue}
                onBlur={handleInput}
              />
            </FormLabel>
            {password.value !== password.confirmValue && (
              <span
                style={{
                  position: 'absolute',
                  bottom: -16,
                  color: 'tomato',
                  fontSize: 12,
                }}
              >
                {password.confirmMessage}
              </span>
            )}
          </FormInputItem>
          <FormInputItem>
            <FormLabel>
              <AcountImg />
              <FormInput
                label="Username"
                type="text"
                placeholder="First name"
                minLength={1}
                maxLength={15}
                name="username"
                onChange={handleInput}
                value={username.value}
                onBlur={handleInput}
              />
            </FormLabel>
            {!username.accepted && (
              <span
                style={{
                  position: 'absolute',
                  bottom: -16,
                  color: 'tomato',
                  fontSize: 12,
                }}
              >
                {username.message}
              </span>
            )}
          </FormInputItem>
        </FormInputList>
        <LinkStyled to="/">Sing In</LinkStyled>
        <FormBtn onClick={handleRegistration} type="button">
          Register
        </FormBtn>
      </form>
    </FormContainer>
  );
};
