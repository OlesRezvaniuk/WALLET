import styled from 'styled-components';
import EllipseTopT from 'Image/Auth/Ellipse2.svg';
import EllipseTopD from 'Image/Auth/Ellipse2d.svg';
import EllipseBottomT from 'Image/Auth/Ellipse1T.svg';
import EllipseBottomD from 'Image/Auth/Ellipse1d.svg';
import BgImg from 'Image/Auth/Group.svg';

export const PageContainer = styled.div`
  padding: 0px 0px;
  position: relative;
  max-width: 1280px;
  margin: auto;
  @media screen and (min-width: 597px) {
    background-image: url(${BgImg}), url(${EllipseTopT}), url(${EllipseBottomT});
    background-repeat: no-repeat;
    background-position: left 114px top 60px, right top, left bottom;
    background-size: 260px, auto, auto;
    background-color: #e7eaf2;
    padding: 360px 32px 196px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 136px 91px 116px 656px;
    background-image: url(${BgImg}), url(${EllipseTopD}), url(${EllipseBottomD});
    background-position: left 76px top 150px, right top, left bottom;
    background-size: 435px, auto, auto;
  }
`;

export const Blur = styled.div`
  display: flex;
  width: 731px;
  position: absolute;
  right: 0;
  height: 100%;
  top: 0;
  @media screen and (min-width: 1280px) {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;
