import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import TshirtColorImage from "images/tshirtMultiColor.png";
import { ExternalWrapper, Title, Text } from "./styled";
import { useStaggered } from "components/Staggered";

export const Colors = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { ref, height } = useStaggered(0.9);

  return (
    <ExternalWrapper>
      <Title isMobile={isMobile}>PRODOTTI E COLORI</Title>
      <Text isMobile={isMobile}>{LABELS.productsAndColors}</Text>
      <div style={{ width: "80vw", height }}>
        <img
          alt="polaroid"
          src={TshirtColorImage}
          style={{ width: "100vw" }}
          ref={ref}
        />
      </div>
    </ExternalWrapper>
  );
};
