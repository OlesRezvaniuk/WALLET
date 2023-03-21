import styled from 'styled-components';

export const CurrencyBox = styled.div`
  display: flex;
  position: static;
  background: rgb(74, 86, 226);
  border-radius: 30px;
  height: 174px;
  margin: 0px 20px;
  @media screen and (min-width: 597px) {
    margin: initial;
    height: 182px;
    position: absolute;
    width: calc(50% - 30px);
    top: 32px;
    right: 20px;
  }
  @media screen and (min-width: 768px) {
    right: 32px;
  }
  @media screen and (min-width: 990px) {
    position: static;
    margin-left: 16px;
    width: 330px;
    padding: 0px;
    height: 330px;
  }
`;

export const CurrencyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media screen and (min-width: 990px) {
    height: 182px;
  }
`;

export const CurrencyTableThead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  background-color: #ffffff36;
`;

export const CurrencyTableTheadTh = styled.th`
  &:first-child {
    padding: 12px 0px 12px 20px;
    text-align: start;
  }
  &:last-child {
    padding: 12px 20px 12px 0px;
    text-align: end;
  }
  &:nth-child(2) {
    padding: 12px 0px 12px 0px;
    text-align: center;
  }
`;

export const CurrencyTableTbody = styled.tbody`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
`;

export const CurrencyTableTbodyTd = styled.td`
  &:first-child {
    padding: 12px 0px 0px 20px;
    text-align: start;
  }
  &:nth-child(2) {
    text-align: center;
    padding: 12px 0px 0px 0px;
  }
  &:last-child {
    padding: 12px 20px 0px 0px;
    text-align: end;
  }
`;
