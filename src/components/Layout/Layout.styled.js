import styled from 'styled-components';
import { ReactComponent as LogoPrimal } from '../../Image/Auth/logo.svg';
import { ReactComponent as ExitIconPrimal } from '../../Image/exitIcon.svg';

export const LayoutBox = styled.div`
  padding: 15px 20px;
  display: flex;
  @media screen and (min-width: 597px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 597px) {
    padding: 20px 18px;
  }
`;

export const LogoImg = styled(LogoPrimal)`
  width: 120px;
  height: 30px;
  display: block;
  @media screen and (min-width: 597px) {
    width: 180px;
    height: 40px;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ExitIcon = styled(ExitIconPrimal)``;

export const UserName = styled.span`
  margin-left: auto;
`;
