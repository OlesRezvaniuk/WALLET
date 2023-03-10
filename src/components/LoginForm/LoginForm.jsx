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
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUserOperation } from 'redux/auth/authOperations';

const data = {
  email: 'rezvniuk@ukr.net',
  password: 'qwerty',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <LogoImg />
      <form>
        <FormInputList>
          <FormInputItem>
            <FormLabel>
              <EmailImg />
              <FormInput type="text" placeholder="E-mail" />
            </FormLabel>
          </FormInputItem>
          <FormInputItem>
            <FormLabel>
              <PasswordImg />
              <FormInput type="text" placeholder="Password" />
            </FormLabel>
          </FormInputItem>
        </FormInputList>
        <LinkStyled to="/Register">Register</LinkStyled>
        <FormBtn
          onClick={() => {
            dispatch(loginUserOperation(data));
          }}
          type="button"
        >
          Log in
        </FormBtn>
      </form>
    </FormContainer>
  );
};
