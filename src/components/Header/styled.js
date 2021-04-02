import styled from "styled-components";

import { FIRST_COLOR, FOURTH_COLOR, SECOND_COLOR } from "constants/palette";
import { FIRST_FONT } from "constants/font";

export const HeaderWrapper = styled.div`
  padding: 10px 30px;

  @media only screen and (max-width: 650px) {
    padding: 10px 10px;
  }
`;

export const MenuItem = styled.div`
  font-family: ${FIRST_FONT};
  color: ${FOURTH_COLOR};
  text-shadow: -1px 0 ${SECOND_COLOR}, 0 1px ${SECOND_COLOR},
    1px 0 ${SECOND_COLOR}, 0 -1px ${SECOND_COLOR};

  flex: 1 1 auto;
  margin: 0 20px;
  padding: 5px 0;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  &:after {
    position: absolute;
    transition: 0.3s;
    content: "";
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #f7f7f7;
    left: 0;
  }

  &:hover {
    cursor: pointer;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  @media only screen and (max-width: 900px) {
    margin: 0 10px;
  }

  @media only screen and (max-width: 650px) {
    font-size: 10px;
    margin: 0 5px;
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
