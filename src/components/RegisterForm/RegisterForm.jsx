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
import { useDispatch } from 'react-redux';

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
        <LinkStyled to="/Login">Sing In</LinkStyled>
        <FormBtn onClick={() => {}} type="button">
          Log in
        </FormBtn>
      </form>
    </FormContainer>
  );
};
