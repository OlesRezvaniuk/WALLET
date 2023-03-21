import styled from 'styled-components';
import { ReactComponent as PlusIconPrimal } from '../../Image/plus.svg';

export const HomePageContainer = styled.div`
  pisition: relative;
  padding: 0px 20px;
  background-color: rgb(245, 248, 255);
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }
  @media screen and (min-width: 990px) {
    padding: 45px 16px 0px 16px;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    border-left: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    padding: 45px 16px 0px 16px;
    width: 100%;
  }
`;

export const AddTransactionBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  stroke: white;
  background-color: rgb(36, 204, 167);
  border: 1px solid transparent;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 3px 5px rgba(36, 204, 167, 0.5);
  transition: 250ms;
  @media screen and (min-width: 597px) {
    right: 40px;
    bottom: 40px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgb(36, 204, 167);
    stroke: rgb(36, 204, 167);
    background-color: white;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  }
`;

export const PlusIcon = styled(PlusIconPrimal)`
  width: 20px;
  height: 20px;
`;
