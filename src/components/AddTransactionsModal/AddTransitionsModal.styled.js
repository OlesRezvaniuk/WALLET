import styled from 'styled-components';
import { ReactComponent as CrossIconPrimal } from '../../Image/plus.svg';
import { ReactComponent as MinusIconPrimal } from '../../Image/minus.svg';
import { ReactComponent as ArrowBottomIconPrimal } from '../../Image/arrowBottom.svg';

export const MinusIcon = styled(MinusIconPrimal)`
  position: absolute;
  transition: 250ms;
  transform: ${prop => prop.type === 'INCOME' && 'rotate(90deg)'};
`;

export const Backdrop = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media screen and (min-width: 597px) {
    overflow: hidden;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  top: 60px;
  position: relative;
  background-color: white;
  padding: 20px 20px 40px 20px;
  text-align: center;
}
  @media screen and (min-width: 597px) {
    top: 80px;
    width: 540px;
    height: max-content;
    border-radius: 20px;
      padding: 40px 73px 60px 73px;
}
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
  transition: 250ms;
  &:focus,
  &:hover {
    border: ${prop =>
      prop.color === 'INCOME'
        ? '1px solid rgb(36, 204, 167)'
        : '1px solid rgb(255, 101, 150)'};
  }
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
  align-items: center;
  margin-bottom: 42px;
  gap: 12px;
  @media screen and (min-width: 290px) {
    gap: 24px;
  }
`;

export const ChangeTypeBtnText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #e0e0e0;
  pointer-events: none;
`;

export const CrossIcon = styled(CrossIconPrimal)`
  display: block;
  stroke: black;
  margin-left: auto;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  cursor: pointer;
  transition: 250ms;
  &:hover,
  &:focus {
    stroke: ${prop =>
      prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
  }
  @media screen and (min-width: 597px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
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
  cursor: pointer;
  transition: 250ms;
  &:focus,
  &:hover {
    color: ${prop =>
      prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
    border-bottom: 1px solid
      ${prop =>
        prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
  }
`;

export const HiddenInputControlls = styled.div`
  width: 20px;
  height: 35px;
  position: absolute;
  background-color: #fff;
  right: 0;
  pointer-events: none;
`;

export const AdaptiveList = styled.ul`
  list-style: none;
  display: block;
  margin-bottom: 40px;
  @media screen and (min-width: 597px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const SelectCategoryBtn = styled.button`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid rgb(224, 224, 224);
  width: 100%;
  margin-bottom: 40px;
  padding: 0px 0px 8px 20px;
  text-align: start;
  cursor: pointer;
  display: flex;
  align-items: center;
  stroke: black;
  transition: 250ms;
  &:focus,
  &:hover {
    color: ${prop =>
      prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
    border-bottom: 1px solid
      ${prop =>
        prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
    stroke: ${prop =>
      prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
  }
`;

export const ArrowBottom = styled(ArrowBottomIconPrimal)`
  margin-left: auto;
  stroke: inherit;
  * {
    stroke: inherit;
  }
`;

export const CategoryListBox = styled.div`
  z-index: 1;
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: -4px;
  transform: translateY(100%);
  background: rgb(249 249 249 / 70%);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  }`;

export const CategoryList = styled.ul`
  list-style: none;
  overflow: auto;
  height: 100%;
  width: 100%;
  position: relative;
  left: 20px;
`;

export const CategoryListHiddenControlls = styled.div`
  position: absolute;
  height: 100%;
  width: 20px;
  background-color: #fff;
  right: -20px;
  z-index: 100;
`;

export const CategoryListItem = styled.li`
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
  position: relative;
  transition: 250ms;
  &:focus,
  &:hover {
    color: rgb(255, 101, 150);
  }
`;

export const CommentTextArea = styled.textarea`
  margin-bottom: 40px;
  border: none;
  outline: none;
  resize: none;
  padding: 0px 0px 60px 20px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  border-bottom: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  transition: 250ms;
  &:hover {
    color: ${prop =>
      prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
    border-bottom: 1px solid
      ${prop =>
        prop.color === 'EXPENSE' ? 'rgb(255, 101, 150)' : 'rgb(36, 204, 167)'};
  }
  @media screen and (min-width: 597px) {
    padding: 0px 0px 8px 20px;
    height: 36px;
  }
`;

export const ModalButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  max-width: 300px;
  height: 50px;
  border-radius: 20px;
  background-color: #24cca7;
  margin: auto;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #24cca7;
    background-color: #fff;
    outline: 1px solid #24cca7;
  }
  &:last-child {
    outline: none;
    background: #ffffff;
    border: 1px solid #4a56e2;
    border-radius: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4a56e2;
    transition: 250ms;
    &:hover,
    &:focus {
      color: #fff;
      background-color: #4a56e2;
    }
  }
`;
