import { LoginForm } from 'components/LoginForm/LoginForm';
import { PageContainer, Blur } from './LoginPage.styled';

export const LoginPage = () => {
  return (
    <PageContainer id="loginPage">
      <Blur />
      <LoginForm />
    </PageContainer>
  );
};
