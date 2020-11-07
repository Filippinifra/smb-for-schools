import { FIRST_FONT, SECOND_FONT } from "constants/font";
import { FIRST_COLOR, FOURTH_COLOR, SECOND_COLOR } from "constants/palette";
import styled from "styled-components";

export const ExternalWrapper = styled.div`
  width: 100%;
  background-color: ${FIRST_COLOR};
  z-index: 5;
  position: relative;
  margin-top: -1px;
  margin-bottom: -1px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FOURTH_COLOR};
  font-size: 45px;
  padding: ${({ isMobile }) => (isMobile ? "40px 20px 0" : "0 50px")};
  margin: 0 0 30px 0;
`;

export const Text = styled.div`
  font-family: ${SECOND_FONT};
  color: ${FOURTH_COLOR};
  font-size: 20px;
  padding: ${({ isMobile }) => (isMobile ? "0 20px" : "0 50px")};
`;

export const ContactItem = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FOURTH_COLOR};
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  background-color: ${SECOND_COLOR};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperLogosTablet = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
