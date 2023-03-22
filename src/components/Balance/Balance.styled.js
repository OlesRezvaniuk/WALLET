import styled from 'styled-components';

export const BalanceBox = styled.div`
  pointer-events: none;
  padding: 0px 20px;
  width: 100%;
  @media screen and (min-width: 597px) {
    width: calc(50% - 29px);
    padding: 0px 0px 0px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 0px 0px 32px;
  }
  @media screen and (min-width: 990px) {
    padding: 0px 0px 0px 0px;
    margin-bottom: 32px;
    margin-left: 16px;
    width: 330px;
  }
`;

export const BalanceTitle = styled.p`
  display: flex;
  flex-direction: column;
  padding: 10px 32px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #a6a6a6;
  border-radius: 30px;
  background-color: #fff;
  @media screen and (min-width: 597px) {
    width: 100%;
  }
  // @media screen and (min-width: 768px) {
  //   width: 336px;
  // }
`;

export const BalanceValue = styled.span`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
`;
