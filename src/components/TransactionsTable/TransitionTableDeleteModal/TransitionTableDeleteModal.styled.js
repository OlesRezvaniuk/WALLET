import styled from 'styled-components';
import { ReactComponent as CrossIconPrimal } from '../../../Image/cross.svg';
import { ReactComponent as CheckmarkIconPrimal } from '../../../Image/checkmark.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  backdrop-filter: blur(2px);
  overflow: hidden;
  z-index: 1;
  background-color: #b2b2b214;
`;

export const Modal = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 0px 20px -15px blue;

  text-align: right;

  color: black;
`;

export const CrossIcon = styled(CrossIconPrimal)`
  pointer-events: none;
  display: flex;
  background-color: white;
  width: 14px;
  height: 14px;
  fill: rgb(36, 204, 167);
`;
export const CheckmarkIcon = styled(CheckmarkIconPrimal)`
  pointer-events: none;
  display: flex;
  background-color: white;
  width: 14px;
  height: 14px;
  fill: rgb(74, 86, 226);
`;

export const ConfirmButton = styled.button`
  border: none;
  background: transparent;
  margin-left: 20px;
  cursor: pointer;
  fill: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
    &::before {
            transition: 250ms;
        position: absolute;
        content: '';
        width: calc(100%);
        height: calc(100%);
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: 25%;
        }   
  &:focus,
  &:hover {
      &::before {
            transition: 250ms;
        position: absolute;
        content: '';
        width: calc(100%);
        height: calc(100%);
        background-color: transparent;
        border: 1px solid grey;
        border-radius: 25%;
        }   
    }
  }
`;
