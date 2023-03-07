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
import { useDispatch, useSelector } from 'react-redux';
import { loginUserOperation } from 'redux/auth/authOperations';
import { authSelector } from 'redux/auth/authSelector';

const data = {
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  console.log(user.auth.token);

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
            console.log('click');
          }}
          type="button"
        >
          Log in
        </FormBtn>
      </form>
    </FormContainer>
  );
};
