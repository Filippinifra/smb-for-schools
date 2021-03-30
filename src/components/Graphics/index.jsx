import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Logos from "images/logos.png";
import { ExternalWrapper, Title, Text } from "./styled";
import { MaxWidthContent } from "components/MaxWidthContent";
import { FadeAnimation } from "components/FadeAnimation";

export const Graphics = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <ExternalWrapper>
      <MaxWidthContent>
        <FadeAnimation>
          <Title isMobile={isMobile}>GRAFICHE</Title>
        </FadeAnimation>
        <FadeAnimation>
          <Text isMobile={isMobile}>{LABELS.graphics}</Text>
        </FadeAnimation>
        <FadeAnimation>
          <div
            style={{
              width: isMobile ? "100%" : "90%",
              zIndex: 2,
              margin: "auto",
            }}
          >
            <img alt="logos" src={Logos} style={{ width: "100%" }} />
          </div>
        </FadeAnimation>
      </MaxWidthContent>
    </ExternalWrapper>
  );
};
