import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import TshirtColorImage from "images/tshirtMultiColor.png";
import { ExternalWrapper, Title, Text } from "./styled";
import { useStaggered } from "hooks/useStaggered";
import { MaxWidthContent } from "components/MaxWidthContent";

export const Colors = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { ref, height } = useStaggered(0.9);

  return (
    <ExternalWrapper>
      <MaxWidthContent>
        <Title isMobile={isMobile}>PRODOTTI E COLORI</Title>
        <Text isMobile={isMobile}>{LABELS.products}</Text>
        <div
          style={{ width: isMobile ? "100%" : "90%", height, margin: "auto" }}
        >
          <img
            alt="t-shirt-color"
            src={TshirtColorImage}
            style={{ width: "100%" }}
            ref={ref}
          />
        </div>
      </MaxWidthContent>
    </ExternalWrapper>
  );
};
