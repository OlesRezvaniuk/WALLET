import styled from 'styled-components';

export const Canvas = styled.canvas`
  margin-top: 8px;
  width: 100%;
  max-width: 330px;
  display: flex;
  margin: 8px auto 32px;
  @media screen and (min-width: 597px) {
    margin: 20px 0px;
    width: 50%;
    max-width: 336px;
    padding-right: 32px;
    height: fit-content;
  }
`;
