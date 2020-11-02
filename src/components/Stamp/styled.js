import { FIRST_FONT, SECOND_FONT } from "constants/font";
import { FIRST_COLOR, FOURTH_COLOR, THIRD_COLOR } from "constants/palette";
import styled from "styled-components";

export const ExternalWrapper = styled.div`
  width: 100%;
  background-color: ${THIRD_COLOR};
  z-index: 5;
  position: relative;
  margin-top: -1px;
  margin-bottom: -1px;
  display: ${({ isMobile }) => (isMobile ? "block" : "flex")};
`;

export const Title = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FIRST_COLOR};
  font-size: 45px;
  margin-bottom: 50px;
`;

export const Text = styled.div`
  font-family: ${SECOND_FONT};
  color: ${FOURTH_COLOR};
  font-size: 20px;
`;

export const MidWrapper = styled.div`
  width: ${({ isMobile }) => (isMobile ? "auto" : "50%")};
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
`;
