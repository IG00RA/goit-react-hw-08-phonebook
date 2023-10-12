import styled from 'styled-components';

export const RegisterImgWrap = styled.div`
  display: flex;
  justify-content: center; /* Горизонтальне центрування */
  align-items: center;
`;

export const RegisterImage = styled.img`
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
