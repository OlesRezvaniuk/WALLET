import styled from 'styled-components';

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
  padding: 12px 0px 0px 20px;
  &:last-child {
    border: none;
  }
`;

export const TableBody = styled.li``;

export const TableBodyList = styled.ul`
  list-style: none;
`;

export const TableBodyListItem = styled.li`
  border-bottom: 1px solid #dcdcdf;
  padding: 12px 0px 0px 20px;
  &:last-child {
    border: none;
    padding-bottom: 12px;
  }
`;

export const TransitionItemList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TransitionItem = styled.li`
  background-color: #fff;
  border-left: 5px solid #4a56e2;
  border-radius: 10px;
`;

export const TableT = styled.table`
  display: none;
  display: block @media screen and(max-width: 597px) {
    display: block;
  }
`;
