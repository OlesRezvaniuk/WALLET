import styled from 'styled-components';
import { ReactComponent as LogoPrimal } from '../../Image/Auth/logo.svg';
import { ReactComponent as ExitIconPrimal } from '../../Image/exitIcon.svg';
import { ReactComponent as HomeIconPrimal } from '../../Image/HomeIcon.svg';
import { ReactComponent as StatisticIconPrimal } from '../../Image/StatisticIcon.svg';
import { ReactComponent as CurrencyIconPrimal } from '../../Image/CurrencyIcon.svg';
import { Link } from 'react-router-dom';
// import EllipseTopT from 'Image/Auth/Ellipse2.svg';
// import EllipseTopD from 'Image/Auth/Ellipse2d.svg';
// import EllipseBottomT from 'Image/Auth/Ellipse1T.svg';
// import EllipseBottomD from 'Image/Auth/Ellipse1d.svg';

export const Container = styled.div`
  background-color: white;
  display: flex;
  z-index: 100;
  position: relative;
  width: 100%;
`;

export const LayoutBox = styled.div`
margin: auto;
width: 100%;
max-width: 1280px;
  padding: 15px 20px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
}
  @media screen and (min-width: 597px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 597px) {
    padding: 20px 18px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  // padding-bottom: 32px;
  @media screen and (min-width: 597px) {
    padding-bottom: 16px;
  }
  @media screen and (min-width: 990px) {
    display: flex;
  }
`;
// @media screen and (min-width: 597px) {
//   background-image: url(), url(${EllipseTopT}), url(${EllipseBottomT});
//   background-repeat: no-repeat;
//   background-position: left 114px top 60px, right top, left bottom;
//   background-size: 260px, auto, auto;
//   background-color: #e7eaf2;
// }
// @media screen and (min-width: 1280px) {
//   background-image: url(), url(${EllipseTopD}), url(${EllipseBottomD});
//   background-position: left 76px top 150px, right top, left bottom;
//   background-size: 435px, auto, auto;
// }

export const ContentTopContainer = styled.div`
  padding-bottom: 32px;
  z-index: 1;
  position: relative;
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
  cursor: pointer;
`;

export const ExitIcon = styled(ExitIconPrimal)``;

export const UserName = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: right;
  color: #bdbdbd;
  margin-right: 8px;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.4);
`;
