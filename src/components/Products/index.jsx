import React from "react";
import { useMediaQuery } from "react-responsive";

import Products1 from "images/products1.png";
import Products2 from "images/products2.png";
import { ExternalWrapper, Title } from "./styled";
import { useStaggered } from "hooks/useStaggered";
import { MaxWidthContent } from "components/MaxWidthContent";

export const Products = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { ref, height } = useStaggered(0.85);

  return (
    <ExternalWrapper isMobile={isMobile}>
      <MaxWidthContent style={{ padding: isMobile ? "0 20px" : "0 50px" }}>
        <Title>I NOSTRI LAVORI</Title>
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
      </MaxWidthContent>
    </ExternalWrapper>
  );
};
