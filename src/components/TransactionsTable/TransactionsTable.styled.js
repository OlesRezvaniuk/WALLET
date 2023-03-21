import styled from 'styled-components';
import { ReactComponent as EditIconPrimal } from '../../Image/editIcon.svg';

export const EditIcon = styled(EditIconPrimal)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  * {
    strole: inherit;
  }
`;

export const TransitionList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;

  display: block @media screen and(min-width: 597px) {
    display: none;
  }
`;

export const TableHeadMobileList = styled.ul`
  list-style: none;
`;

export const TableHeadMobile = styled.li``;
export const TableHeadMobileListItem = styled.li`
  border-bottom: 1px solid #dcdcdf;
  padding: 12px 0px 0px 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 8px;
  /* identical to box height */
  color: #000000;
`;

export const TableFooterList = styled.ul`
  display: flex;
  padding: 12px 20px 12px 20px;
  list-style: none;
  justify-content: space-between;
`;

export const TableFooterListItem = styled.li``;

export const TableBody = styled.li`
  width: 100%;
`;

export const TableBodyList = styled.ul`
  list-style: none;
  text-align: end;
`;

export const TableBodyListItem = styled.li`
  height: 48px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdf;
  padding: 12px 20px 0px 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: right;
  color: #000000;
  padding-bottom: 8px;
`;

export const TransitionItemList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const TransitionItem = styled.li`
  background-color: #fff;

  border-left: 5px solid ${p => (p.type === 'EXPENSE' ? '#FF6596' : '#24CCA7')};
  border-radius: 10px;
`;

export const TableTablet = styled.table`
  border-collapse: collapse;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 990px) {
    width: 100%;
  }
`;

export const TransitionTableTabletThead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const TransitionTableTabletTheadItem = styled.th`
  padding: 15px 0px;
  background-color: white;
  &:first-child {
    width: 38px;
    padding-left: 20px;
    padding-right: 30px;
    border-top-left-radius: 29px;
    border-bottom-left-radius: 29px;
  }
  &:nth-child(2) {
    width: 37px;
    padding-right: 18px;
  }
  &:nth-child(3) {
    width: 71px;
    padding-right: 68px;
  }
  &:nth-child(4) {
    max-width: 110px;
    width: 110px;
    overflow: hidden;
  }
  &:last-child {
    border-top-right-radius: 29px;
    border-bottom-right-radius: 29px;
    width: 34px;
    padding-right: 120px;
  }
`;

export const TransitionTableTabletTbody = styled.tbody`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
export const TransitionTableTabletTbodyTr = styled.tr`
    border-bottom: 1px solid #DCDCDF;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
}
`;

export const TransitionTableTabletTbodyTd = styled.td`
  padding: 15px 0px;
  &:nth-child(1) {
    padding-left: 20px;
  }
  &:nth-child(2) {
    padding-left: 18px;
  }
`;

export const TableFooterDeleteBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  padding: 4px 12px;
  color: #ffffff;
  border-radius: 15px;
  border: none;
  background-color: #24cca7;
  cursor: pointer;
  transition: 250ms;
  text-transform: capitalize;
  &:focus,
  &:hover {
    color: #24cca7;
    background-color: #fff;
    outline: 1px solid #24cca7;
  }
`;

export const TableFooterEditBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  padding: 4px 0px;
  color: black;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: 250ms;
  text-transform: capitalize;
  stroke: black;
  background-color: transparent;
  &:focus,
  &:hover {
    stroke: #24cca7;
    color: #24cca7;
    background-color: #fff;
  }
`;

export const TableFooterItem = styled.li`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
`;
