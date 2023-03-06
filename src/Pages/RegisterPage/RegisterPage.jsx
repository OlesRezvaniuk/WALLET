import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { PageContainer, Blur } from './RegisterPage.styled';

export const RegisterPage = () => {
  return (
    <PageContainer id="loginPage">
      <Blur />
      <RegisterForm />
    </PageContainer>
  );
};
