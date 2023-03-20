import styled from 'styled-components';
import { ReactComponent as CalendarIconPrimal } from '../../Image/calendar.svg';

export const DateBox = styled.div`
  text-align: start;
  padding-bottom: 8px;
  padding-left: 20px;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: flex;
  position: relative;
`;

export const DateValue = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  pointer-events: none;
`;

export const CalendarBtn = styled.button`
  margin-left: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  fill: #4a56e2;
  transition: 250ms;
  &:focus,
  &:hover {
    fill: rgb(36, 204, 167);
  }
`;

export const CalendarIcon = styled(CalendarIconPrimal)`
  fill: inherit;
  color: inherit;
  * {
    fill: inherit;
    color: inherit;
  }
`;

export const ChooseDateBox = styled.div`
  background-color: white;
  width: max-content;
  display: flex;
  top: 40px;
  left: 0;
  width: 100%;
  padding: 10px;

  z-index: 1;
  position: absolute;
  background: rgb(249, 249, 249);
  backdrop-filter: blur(4px);
  border-radius: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
`;

export const ChooseDateBoxList = styled.ul`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  overflow: auto;
  width: 100%;
  height: 150px;
  @media screen and (min-width: 597px) {
    width: auto;
  }
`;

export const ChooseDateBoxListHiddenElement = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  top: -;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  background: rgb(249, 249, 249);
`;

export const ChooseDateBoxListItem = styled.li`
  transition: 250ms;
  cursor: pointer;
  &:focus,
  &:hover {
    color: rgb(255, 101, 150);
  }
`;
