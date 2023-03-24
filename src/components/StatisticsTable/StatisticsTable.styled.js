import styled from 'styled-components';
import { ReactComponent as ArrowIconPrimal } from '../../Image/arrowBottom.svg';

export const StatisticsTableBox = styled.div`
  width: 100%;
  position: relative;
`;

export const TableTd = styled.td`
  padding: 13px 0px;
  border-bottom: 1px solid rgb(220, 220, 223);
  align-items: center;
  &:first-child {
    text-align: start;
    padding-left: 20px;
  }
  &:last-child {
    text-align: end;
    padding-right: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 16px;
`;

export const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${prop => prop.color};
  margin-right: 16px;
`;

export const TableHeadTr = styled.tr``;

export const TableHeadTh = styled.th`
  background-color: white;
  padding: 15px 0px;
  &:first-child {
    text-align: start;
    padding-left: 20px;
    border-radius: 30px 0px 0px 30px;
  }
  &:last-child {
    text-align: end;
    padding-right: 20px;
    border-radius: 0px 30px 30px 0px;
  }
`;

export const ControllsBoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 597px) {
    flex-direction: row;
    position: relative;
  }
`;

export const ControllsBoxItem = styled.div`
  @media screen and (min-width: 597px) {
    width: 100%;
    position: relative;
  }
`;

export const ControllsButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  stroke: black;
  transition: 250ms;
  &:hover,
  &:focus {
    color: ${prop => prop.color};
    border: 1px solid ${prop => prop.color};
    stroke: ${prop => prop.color};
  }
`;

export const ArrowIcon = styled(ArrowIconPrimal)`
  width: 18px;
  stroke: inherit;
  transition: 250ms;
  pointer-events: none;
`;

export const ControllsListBox = styled.div`
  margin-top: 8px;
  position: absolute;
  width: 100%;
  z-index: 1;
  background: rgba(249, 249, 249, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 15px;
  padding: 12px 0px 0px;
  overflow: hidden;
  // @media screen and (min-width: 990px) {
  //   width: 49%;
  // }
`;

export const ControllsList = styled.ul`
  position: relative;
  left: 20px;
  width: 100%;
  height: 168px;
  overflow: auto;
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &:nth-child(2) {
    left: 0px;
    background: rgba(249, 249, 249, 0.9);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 15px;
    padding: 12px 20px;
    margin-top: 8px;
    position: absolute;
  }
`;

export const ControllsListItem = styled.li`
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    color: ${prop => prop.color};
    color: ${prop => prop.color};
  }
`;

export const IndexesList = styled.ul`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const IndexesListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;
