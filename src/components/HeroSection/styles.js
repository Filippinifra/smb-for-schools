import { SECOND_COLOR } from "constants/palette";
import styled from "styled-components";

import heroImageDesktop from "images/heroImages/desktop.png";
import heroImageMobile from "images/heroImages/mobile.png";
import heroImageTablet from "images/heroImages/tablet.png";

export const BackgroundWrapper = styled.div`
  position: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${heroImageDesktop});
  width: 100vw;
  height: 100vh;
  background-color: ${SECOND_COLOR};

  @media only screen and (max-width: 1100px) {
    background-image: url(${heroImageTablet});
  }

  @media only screen and (max-width: 650px) {
    background-image: url(${heroImageMobile});
  }
`;
