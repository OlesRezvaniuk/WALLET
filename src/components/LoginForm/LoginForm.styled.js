import styled from 'styled-components';
import { ReactComponent as LogoPrimal } from '../../Image/Auth/logo.svg';
import { ReactComponent as EmailPrimal } from '../../Image/Auth/baseline-email-24px 1.svg';
import { ReactComponent as PasswordPrimal } from '../../Image/Auth/baseline-lock-24px 1.svg';

export const FormContainer = styled.div`
  padding: 107px 20px;
  text-align: center;
  max-width: 533px;
  margin: auto;
  background-color: #fff;
  @media screen and (min-width: 597px) {
    border-radius: 20px;
    padding: 40px 60px 66px 60px;
  }
`;

export const LogoImg = styled(LogoPrimal)`
  width: 120px;
  height: 30px;
  margin: auto;
  margin-bottom: 60px;
`;

export const FormInputList = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const FormInputItem = styled.li`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  width: 100%;
  margin: auto;
`;

export const FormInput = styled.input`
  width: 100%;
  backgroundcolor: transparent;
  border: none;
  outline: none;
`;

export const EmailImg = styled(EmailPrimal)``;
export const PasswordImg = styled(PasswordPrimal)``;
