import styled from 'styled-components';
import { ReactComponent as PlusIconPrimal } from '../../Image/plus.svg';

export const HomePageContainer = styled.div`
  pisition: relative;
  padding: 0px 20px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }
  @media screen and (min-width: 990px) {
    padding: 45px 16px 0px 16px;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    border-left: 1px solid #e7e5f2;
    padding: 45px 16px 0px 16px;
    width: 100%;
  }
`;

export const AddTransactionBtn = styled.button`
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  stroke: white;
  background-color: rgb(74, 86, 226);
  border: 1px solid transparent;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 3px 5px rgba(74, 86, 226, 0.5);
  transition: 250ms;
  @media screen and (min-width: 597px) {
    right: 40px;
    bottom: 40px;
    position: sticky;
    margin-left: auto;
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgb(74, 86, 226);
    stroke: rgb(74, 86, 226);
    background-color: white;
    box-shadow: 0px 6px 15px rgba(74, 86, 226, 0.5);
  }
`;

export const PlusIcon = styled(PlusIconPrimal)`
  width: 20px;
  height: 20px;
`;
