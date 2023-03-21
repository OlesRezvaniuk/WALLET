import styled from 'styled-components';
import { ReactComponent as LogoPrimal } from '../../Image/Auth/logo.svg';
import { ReactComponent as ExitIconPrimal } from '../../Image/exitIcon.svg';
import { ReactComponent as HomeIconPrimal } from '../../Image/HomeIcon.svg';
import { ReactComponent as StatisticIconPrimal } from '../../Image/StatisticIcon.svg';
import { ReactComponent as CurrencyIconPrimal } from '../../Image/CurrencyIcon.svg';
import { Link } from 'react-router-dom';

export const LayoutBox = styled.div`
  padding: 15px 20px;
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  ox-shadow: 0px 0px 2px grey;
}
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

export const NavBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 15px 0px;
`;

export const LinkStyled = styled(Link)`
  opacity: 0.75;
`;

export const HomeIcon = styled(HomeIconPrimal)`
  height: 44px;
  width: 44px;
  display: flex;
  fill: #4a56e2;
`;
export const StatisticIcon = styled(StatisticIconPrimal)`
  height: 44px;
  width: 44px;
  display: flex;
  fill: #4a56e2;
`;
export const CurrencyIcon = styled(CurrencyIconPrimal)`
  height: 44px;
  width: 44px;
  display: flex;
  fill: #4a56e2;
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ExitIcon = styled(ExitIconPrimal)``;

export const UserName = styled.span`
  margin-left: auto;
`;
