import styled from 'styled-components';
import { ReactComponent as CrossIconPrimal } from '../../Image/plus.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media screen and (min-width: 597px) {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const Form = styled.form`
  top: 60px;
  position: relative;
  background-color: white;
  padding: 20px 20px 40px 20px;
  @media screen and (min-width: 597px) {
    top: 80px;
    height: auto;
  }
`;

export const CrossIcon = styled(CrossIconPrimal)`
  display: block;
  stroke: black;
  margin-left: auto;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
`;
