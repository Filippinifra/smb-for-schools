import styled from "styled-components";

import { FOURTH_COLOR, SECOND_COLOR } from "constants/palette";
import { FIRST_FONT } from "constants/font";

export const HeaderWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FOURTH_COLOR};
  padding: 0 20px;

  text-shadow: -2px 0 ${SECOND_COLOR}, 0 2px ${SECOND_COLOR},
    2px 0 ${SECOND_COLOR}, 0 -2px ${SECOND_COLOR};

  @media only screen and (max-width: 900px) {
    padding: 0 10px;
  }

  @media only screen and (max-width: 650px) {
    padding: 0 5px;
    font-size: 12px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  color: ${FOURTH_COLOR};
  font-size: 40px;
  font-weight: 700;
  font-family: ${FIRST_FONT};
  line-height: 32px;

  text-shadow: -2px 0 ${SECOND_COLOR}, 0 2px ${SECOND_COLOR},
    2px 0 ${SECOND_COLOR}, 0 -2px ${SECOND_COLOR};

  @media only screen and (max-width: 650px) {
    font-size: 25px;
  }
`;

export const SubTitle = styled.div`
  color: ${FOURTH_COLOR};
  font-family: ${FIRST_FONT};
  font-size: 13px;

  text-shadow: -2px 0 ${SECOND_COLOR}, 0 2px ${SECOND_COLOR},
    2px 0 ${SECOND_COLOR}, 0 -2px ${SECOND_COLOR};

  @media only screen and (max-width: 650px) {
    font-size: 8px;
  }
`;
