import { FIRST_FONT, SECOND_FONT } from "constants/font";
import { FOURTH_COLOR, SECOND_COLOR } from "constants/palette";
import styled from "styled-components";

export const ExternalWrapper = styled.div`
  width: 100%;
  background-color: ${FOURTH_COLOR};
  z-index: 5;
  position: relative;
  margin-top: -1px;
  margin-bottom: -1px;
  padding-top: 60px;
`;

export const Title = styled.div`
  font-family: ${FIRST_FONT};
  color: ${SECOND_COLOR};
  font-size: 45px;
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
`;

export const Text = styled.div`
  font-family: ${SECOND_FONT};
  color: ${SECOND_COLOR};
  font-size: 20px;
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
  margin: 50px 0;
`;
