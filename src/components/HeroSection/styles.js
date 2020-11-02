import { SECOND_COLOR } from "constants/palette";
import styled from "styled-components";

import heroImage from "images/heroImage.png";

export const BackgroundWrapper = styled.div`
  position: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${heroImage});
  width: 100vw;
  height: 100vh;
  background-color: ${SECOND_COLOR};
`;
