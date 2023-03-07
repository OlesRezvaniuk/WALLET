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

const data = {
  username: 'oles3',
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const RegisterForm = () => {
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
