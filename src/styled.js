import { SECOND_FONT } from "constants/font";
import { FIRST_COLOR, SECOND_COLOR } from "constants/palette";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: ${SECOND_FONT}, sans-serif;
        height: 100vh;
        width: 100%;
        font-style: normal;
        font-weight: 400;
        background-color: ${SECOND_COLOR}
    }
  
    code {
        font-family: ${FIRST_COLOR};
    }

    *{
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export default GlobalStyle;
