import { FIRST_COLOR } from "constants/palette";
import Styled, { css } from "styled-components";

export const ContainerLoader = Styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    height: 100vh;
    width: 100%;
    background-color: ${FIRST_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;

    ${({ loaderStep }) =>
      loaderStep === 2 &&
      css`
        display: none;
      `}

    ${({ loaderStep }) =>
      loaderStep === 1 &&
      css`
        opacity: 0;
        transition: all 2s;
        -webkit-transition: 2s;
      `}
`;

export const ContainerElements = Styled.div`
    display: block;
`;
