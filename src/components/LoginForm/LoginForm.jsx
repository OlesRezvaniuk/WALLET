import { Link } from 'react-router-dom';
import {
  FormContainer,
  LogoImg,
  EmailImg,
  PasswordImg,
  FormInputList,
  FormInputItem,
  FormInput,
} from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <FormContainer style={{ display: 'flex', flexDirection: 'column' }}>
      <LogoImg />
      <form>
        <FormInputList>
          <FormInputItem>
            <EmailImg />
            <FormInput type="text" placeholder="E-mail" />
          </FormInputItem>
          <FormInputItem>
            <PasswordImg />
            <FormInput type="text" placeholder="Password" />
          </FormInputItem>
        </FormInputList>
        <Link to="/Register">to Register</Link>
        <div>button</div>
      </form>
    </FormContainer>
  );
};
