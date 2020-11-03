import { FIRST_FONT } from "constants/font";
import { FIRST_COLOR, FOURTH_COLOR } from "constants/palette";
import styled from "styled-components";

export const ExternalWrapper = styled.div`
  width: 100%;
  background-color: ${FOURTH_COLOR};
  z-index: 5;
  position: relative;
  margin-top: -1px;
  margin-bottom: -1px;
  padding-top: 30px;
`;

export const Title = styled.div`
  text-align: center;
  font-family: ${FIRST_FONT};
  color: ${FIRST_COLOR};
  font-size: 45px;
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
  margin-bottom: 50px;
`;
