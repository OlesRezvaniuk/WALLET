import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  position: relative;
  padding: 8px 20px 45px;
  @media screen and (min-width: 990px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 597px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
