import styled from 'styled-components';
import { ReactComponent as CrossIconPrimal } from '../../Image/plus.svg';
import { ReactComponent as MinusIconPrimal } from '../../Image/minus.svg';

export const MinusIcon = styled(MinusIconPrimal)`
  position: absolute;
  transition: 250ms;
  transform: ${prop => prop.type === 'INCOME' && 'rotate(90deg)'};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media screen and (min-width: 597px) {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const Form = styled.form`
  top: 60px;
  position: relative;
  background-color: white;
  padding: 20px 20px 40px 20px;
  text-align: center;
  @media screen and (min-width: 597px) {
    top: 80px;
    height: auto;
  }
`;

export const ChangeTypeBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
`;

export const ChangeTypeBtnIconBox = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  background-color: ${prop =>
    prop.type === 'EXPENSE' ? '#ff6596' : '#24CCA7'};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${prop =>
    prop.type === 'EXPENSE'
      ? 'translate(3px, -50%)'
      : 'translate(-37px, -50%)'};
  border-radius: 50%;
  box-shadow: ${prop =>
    prop.type === 'EXPENSE'
      ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
      : '0px 6px 15px rgba(36, 204, 167, 0.5)'};
  transition: 250ms;
`;

export const ChangeTypeBtnBox = styled.div`
  justify-content: center;
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 42px;
`;

export const ChangeTypeBtnText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #e0e0e0;
`;

export const CrossIcon = styled(CrossIconPrimal)`
  display: block;
  stroke: black;
  margin-left: auto;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 40px;
  color: #000000;
  transition: 250ms;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 40px;
  padding-bottom: 8px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
`;
