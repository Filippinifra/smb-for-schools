import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Logos from "images/logos.png";
import { ExternalWrapper, Title, Text } from "./styled";

export const Graphics = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <ExternalWrapper>
      <Title isMobile={isMobile}>GRAFICHE</Title>
      <Text isMobile={isMobile}>{LABELS.graphics}</Text>
      <div style={{ width: "80vw", zIndex: 2 }}>
        <img alt="polaroid" src={Logos} style={{ width: "100vw" }} />
      </div>
    </ExternalWrapper>
  );
};
