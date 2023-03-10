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

  const handleEmail = e => {
    emailValidation({ email, setEmail, e });
  };

  const handlePassword = e => {
    validationPassword({ password, setPassword, e });
  };

  const handleConfirmPassword = e => {
    confirmPassword({ password, setPassword, e });
  };

  const handleUserName = e => {
    validationUsername({ username, setUsername, e });
  };

  const handleRegistration = () => {
    if (
      user.username !== null &&
      user.email !== null &&
      user.password !== null
    ) {
      dispatch(registerUserOperation(user));
    }
  };

  return (
    <FormContainer>
      <LogoImg />
      <form>
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
                onChange={handleEmail}
                value={email.value}
                onBlur={handleEmail}
              />
            </FormLabel>
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
                onChange={handlePassword}
                value={password.value}
                onBlur={handlePassword}
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  setPassword({ ...password, hidden: !password.hidden });
                }}
              >
                {password.hidden ? 'show' : 'hide'}
              </button>
            </FormLabel>
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
                name="password"
                onChange={handleConfirmPassword}
                value={password.confirmValue}
                onBlur={handleConfirmPassword}
              />
            </FormLabel>
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
                onChange={handleUserName}
                value={username.value}
                onBlur={handleUserName}
              />
            </FormLabel>
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
