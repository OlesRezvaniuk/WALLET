import {
  FormContainer,
  LogoImg,
  EmailImg,
  PasswordImg,
  FormInputList,
  FormInputItem,
  FormInput,
  FormLabel,
  LinkStyled,
  FormBtn,
  ErrorMessage,
  ShowPassword,
  HidePassword,
  PasswordShowBtn,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUserOperation } from 'redux/auth/authOperations';
import { useState } from 'react';

export const LoginForm = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const data = { userData, setShowMessage };
    e.preventDefault();
    dispatch(loginUserOperation(data));
  };

  const handleInputChange = e => {
    if (e.target.id === 'loginEmailnput') {
      setUserData({ ...userData, email: e.target.value });
    } else if (e.target.id === 'loginPasswordInput') {
      setUserData({ ...userData, password: e.target.value });
    }
  };

  return (
    <FormContainer>
      <LogoImg />
      <form onSubmit={handleSubmit}>
        <FormInputList>
          <FormInputItem>
            <FormLabel id="loginEmailLabel">
              <EmailImg />
              <FormInput
                id="loginEmailnput"
                value={userData.email}
                onChange={handleInputChange}
                type="text"
                placeholder="E-mail"
              />
            </FormLabel>
          </FormInputItem>
          <FormInputItem>
            <FormLabel id="loginPasswordLabel">
              <PasswordImg />
              <FormInput
                id="loginPasswordInput"
                value={userData.password}
                onChange={handleInputChange}
                type={passwordHidden ? 'password' : 'text'}
                placeholder="Password"
              />
              <PasswordShowBtn
                onClick={() => {
                  setPasswordHidden(!passwordHidden);
                }}
                type="button"
              >
                {passwordHidden ? <ShowPassword /> : <HidePassword />}
              </PasswordShowBtn>
            </FormLabel>
          </FormInputItem>
        </FormInputList>
        <ErrorMessage showMessage={showMessage}>
          {userData.email.length === 0 && userData.password.length === 0
            ? 'All fields must be filled'
            : 'Wrong email or password'}
        </ErrorMessage>
        <LinkStyled to="/Register">Register</LinkStyled>
        <FormBtn type="submit">Log in</FormBtn>
      </form>
    </FormContainer>
  );
};
