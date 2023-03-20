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
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid rgb(224, 224, 224);
  padding: 10px;
`;
