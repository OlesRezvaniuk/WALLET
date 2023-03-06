import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoPrimal } from '../../Image/Auth/logo.svg';
import { ReactComponent as EmailPrimal } from '../../Image/Auth/baseline-email-24px 1.svg';
import { ReactComponent as PasswordPrimal } from '../../Image/Auth/baseline-lock-24px 1.svg';
import { ReactComponent as AcountPrimal } from '../../Image/Auth/baseline-account_box-24px 1.svg';

export const FormContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 107px 20px;
  text-align: center;
  max-width: 533px;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 597px) {
    border-radius: 20px;
    padding: 40px 60px 66px 60px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0px;
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
  display: flex;
  width: 100%;
  margin: auto;
  fill: #e0e0e0;
  color: #e0e0e0;
  cursor: pointer;
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  backgroundcolor: transparent;
  border: none;
  outline: none;
  fill: inherit;
  color: inherit;
  cursor: pointer;
`;

export const EmailImg = styled(EmailPrimal)`
  width: 24px;
  height: 24px;
  fill: inherit;
  color: inherit;
  * {
    fill: inherit;
    color: inherit;
  }
`;
export const PasswordImg = styled(PasswordPrimal)`
  width: 24px;
  height: 24px;
  fill: inherit;
  color: inherit;
  * {
    fill: inherit;
    color: inherit;
  }
`;
export const AcountImg = styled(AcountPrimal)`
  width: 24px;
  height: 24px;
  fill: inherit;
  color: inherit;
  * {
    fill: inherit;
    color: inherit;
  }
`;

export const FormLabel = styled.label`
  padding: 0px 10px 8px 10px;
  width: 100%;
  display: flex;
  gap: 20px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  transition: 250ms;
  &:hover,
  &:focus {
    fill: #24cca7;
    color: #24cca7;
    border-bottom: 1px solid #24cca7;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  height: 50px;
  border-radius: 20px;
  background-color: #24cca7;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-bottom: 33px;
  transition: 250ms;
  @media screen and (min-width: 597px) {
    margin-bottom: 20px;
  }
  &:hover,
  &:focus {
    color: #24cca7;
    background-color: #fff;
    border: 1px solid #24cca7;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 300px;
  background-color: transparent;
  height: 50px;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #4a56e2;
    color: #fff;
    border: 1px solid #fff;
  }
`;
