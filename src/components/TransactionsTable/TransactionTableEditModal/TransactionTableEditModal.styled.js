import styled from 'styled-components';
import { ReactComponent as CrossIconPrimal } from '../../../Image/plus.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  backdrop-filter: blur(5px);
  overflow: hidden;
  z-index: 1;
  background-color: #b2b2b214;
  padding: 0px 20px;
  @media screen and (min-width: 597px) {
    padding: 0px 32px;
  }
  @media screen and (min-width: 990px) {
    padding: 0px 16px;
  }
`;

export const Form = styled.form`
  max-width: 320px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;

  padding-bottom: 40px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-width: 300px;
  gap: 20px;
`;

export const CloseButton = styled.button`
  display: block;
  margin-left: auto;
  background-color: transparent;
  border: none;
  outline: none;
  stroke: black;
  transition: 250ms;
  cursor: pointer;
  &:focus,
  &:hover {
    stroke: rgb(36, 204, 167);
  }
`;

export const CloseIcon = styled(CrossIconPrimal)`
  stroke: inherit;
  transform: rotate(45deg);
  width: 18px;
  display: block;
`;
export const ClearIcon = styled(CrossIconPrimal)`
  stroke: black;
  width: 12px;
  height: 12px;
  display: block;
  transform: rotate(45deg);
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding-bottom: 8px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: rgb(189, 189, 189);
  cursor: pointer;
  transition: all 250ms ease 0s;
  border: none;
`;

export const ClearButton = styled.button`
  height: max-content;
  padding: 4px;
  border-radius: 50%;
  outline: none;
  border: 1px solid rgb(224, 224, 224);
  background-color: transparent;
  transition: 250ms;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(189, 189, 189, 0.5);
  }
`;

export const ControllsButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  max-width: 300px;
  height: 50px;
  border-radius: 20px;
  background-color: #24cca7;
  margin: auto;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #24cca7;
    background-color: #fff;
    outline: 1px solid #24cca7;
  }
  &:last-child {
    outline: none;
    background: #ffffff;
    border: 1px solid #4a56e2;
    border-radius: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4a56e2;
    transition: 250ms;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #4a56e2;
    }
  }
`;
