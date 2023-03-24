import styled from 'styled-components';
import { ReactComponent as ArrowIconPrimal } from '../../Image/arrowBottom.svg';

export const Box = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  gap: 10px;
  padding-top: 10px;
  justify-content: center;
`;

export const ArrowIcon = styled(ArrowIconPrimal)`
  width: 16px;
  stroke: inherit;
  transform: ${prop =>
    prop.position === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)'};
  pointer-events: none;
`;

export const Button = styled.button`
  width: 30px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(36, 204, 167);
  stroke: rgb(36, 204, 167);
  cursor: pointer;
  transition: 250ms;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: rgb(36, 204, 167);
    border: 1px solid transparent;
    stroke: #fff;
  }
`;

export const Text = styled.span`
  font-weight: 900;
  color: rgb(36, 204, 167);
  font-size: 16px;
`;
