import styled from "styled-components";

import { FIRST_COLOR, FOURTH_COLOR, SECOND_COLOR } from "constants/palette";
import { FIRST_FONT } from "constants/font";

export const HeaderWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 650px) {
    padding: 10px 10px;
  }
`;

export const MenuItem = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FOURTH_COLOR};
  padding: 0 20px;
  cursor: pointer;

  text-shadow: -1px 0 ${SECOND_COLOR}, 0 1px ${SECOND_COLOR},
    1px 0 ${SECOND_COLOR}, 0 -1px ${SECOND_COLOR};

  @media only screen and (max-width: 900px) {
    padding: 0 10px;
  }

  @media only screen and (max-width: 650px) {
    padding: 0 5px;
    font-size: 10px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  color: ${FIRST_COLOR};
  font-size: 40px;
  font-weight: 700;
  font-family: ${FIRST_FONT};
  line-height: 32px;

  text-shadow: -1px 0 ${SECOND_COLOR}, 0 1px ${SECOND_COLOR},
    1px 0 ${SECOND_COLOR}, 0 -1px ${SECOND_COLOR};

  @media only screen and (max-width: 650px) {
    font-size: 25px;
    line-height: 20px;
  }
`;

export const SubTitle = styled.div`
  color: ${FOURTH_COLOR};
  font-family: ${FIRST_FONT};
  font-size: 13px;

  text-shadow: -1px 0 ${SECOND_COLOR}, 0 1px ${SECOND_COLOR},
    1px 0 ${SECOND_COLOR}, 0 -1px ${SECOND_COLOR};

  @media only screen and (max-width: 650px) {
    font-size: 8px;
  }
`;
