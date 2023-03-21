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

export const ContentContainer = styled.div`
  background-color: rgb(245, 248, 255);
  position: relative;
  padding-bottom: 32px;
  @media screen and (min-width: 597px) {
    padding-bottom: 16px;
  }
  @media screen and (min-width: 990px) {
    display: flex;
  }
`;

export const ContentTopContainer = styled.div`
  padding-bottom: 32px;
  @media screen and (min-width: 597px) {
    padding-bottom: 16px;
  }
  @media screen and (min-width: 990px) {
    padding-bottom: none;
    padding-right: 16px;
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
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  padding: 15px 20px;
  @media screen and (min-width: 597px) {
    padding: 40px 32px 28px 32px;
    flex-direction: column;
    gap: 12px;
  }
  @media screen and (min-width: 597px) {
    padding: 40px 16px 28px 16px;
  }
`;

export const LinkStyled = styled(Link)`
  opacity: 0.75;
  @media screen and (min-width: 597px) {
    display: flex;
    gap: 23px;
    text-decoration: none;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

export const HomeIcon = styled(HomeIconPrimal)`
  height: 44px;
  width: 44px;
  display: flex;
  fill: #4a56e2;
  @media screen and (min-width: 597px) {
    width: 18px;
    height: 18px;
  }
`;
export const StatisticIcon = styled(StatisticIconPrimal)`
  height: 44px;
  width: 44px;
  display: flex;
  fill: #4a56e2;
  @media screen and (min-width: 597px) {
    width: 18px;
    height: 18px;
  }
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
