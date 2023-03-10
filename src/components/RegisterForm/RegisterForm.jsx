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
import { useState } from 'react';
import { emailValidation, correct } from './RegisterFormValidation';

const data = {
  username: 'oles3',
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const RegisterForm = () => {
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
    hidden: true,
  });

  const dispatch = useDispatch();

  const handleEmail = e => {
    setEmail({ value: e.target.value, isCorrect: false, message: '' });
    // eslint-disable-next-line
    let re = /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length === 0) {
      emailValidation({ setEmail, e, request: 'required' });
    } else if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      emailValidation({ setEmail, e, request: 'wrong' });
    } else if (email.value.length < 10) {
      emailValidation({ setEmail, e, request: 'more' });
    } else if (email.value.length > 64) {
      emailValidation({ setEmail, e, request: 'less' });
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

  const handlePassword = e => {
    let pattern = /^\w*$/;
    if (pattern.test(e.target.value)) {
      console.log('handle password:', e.target.value);
      setPassword({
        value: e.target.value,
        confirmValue: '',
        isCorrect: false,
        message: '',
        hidden: true,
      });
      console.log(
        'Password must contain numbers and/or letters without spaces'
      );
    }
  };

  console.log(password.value);

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
                label="Email"
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
              <FormInput type="text" placeholder="Confirm password" />
            </FormLabel>
          </FormInputItem>
          <FormInputItem>
            <FormLabel>
              <AcountImg />
              <FormInput type="text" placeholder="First name" />
            </FormLabel>
          </FormInputItem>
        </FormInputList>
        <LinkStyled to="/">Sing In</LinkStyled>
        <FormBtn
          onClick={() => {
            dispatch(registerUserOperation(data));
            console.log('hi');
          }}
          type="button"
        >
          Register
        </FormBtn>
      </form>
    </FormContainer>
  );
};
