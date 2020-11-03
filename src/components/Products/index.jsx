import React from "react";
import { useMediaQuery } from "react-responsive";

import Products1 from "images/products1.png";
import Products2 from "images/products2.png";
import { ExternalWrapper, Title, Text } from "./styled";
import { useStaggered } from "hooks/useStaggered";
import { LABELS } from "constants/labels";

export const Products = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { ref, height } = useStaggered(0.85);

  return (
    <ExternalWrapper>
      <Title isMobile={isMobile}>I NOSTRI LAVORI</Title>
      <div style={{ zIndex: 2, height }}>
        <div ref={ref}>
          <img
            alt="products1"
            src={Products1}
            style={{ width: isMobile ? "100%" : "50%" }}
          />
          <img
            alt="products2"
            src={Products2}
            style={{ width: isMobile ? "100%" : "50%" }}
          />
        </div>
      </div>
    </ExternalWrapper>
  );
};
