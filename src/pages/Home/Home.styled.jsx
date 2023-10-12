import styled from 'styled-components';

export const StyledDivHome = styled.div`
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  @media screen and (min-width: 460px) {
    width: 60%;
  }
  @media screen and (min-width: 860px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 600px;
  }
`;

export const MainImgWrap = styled.div``;
