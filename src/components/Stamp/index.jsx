import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Print from "images/print.png";
import Embroidery from "images/embroidery.png";

import { ExternalWrapper, Title, Text, MidWrapper } from "./styled";
import { MaxWidthContent } from "components/MaxWidthContent";
import { FadeAnimation } from "components/FadeAnimation";

export const Stamp = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <ExternalWrapper isMobile={isMobile}>
      <MaxWidthContent style={{ display: isMobile ? "block" : "flex" }}>
        <MidWrapper isMobile={isMobile}>
          <FadeAnimation>
            <Title>STAMPA</Title>
          </FadeAnimation>
          <FadeAnimation>
            <Text style={{ marginBottom: 50 }}>{LABELS.print1}</Text>
          </FadeAnimation>
          <FadeAnimation>
            <img
              alt="print"
              src={Print}
              style={{ width: "100%", paddingBottom: 50 }}
            />
          </FadeAnimation>
        </MidWrapper>
        <MidWrapper isMobile={isMobile}>
          <FadeAnimation>
            <Title>RICAMO</Title>
          </FadeAnimation>
          <FadeAnimation>
            <img
              alt="embroidery"
              src={Embroidery}
              style={{ width: "100%", marginBottom: 50 }}
            />
          </FadeAnimation>
          <FadeAnimation>
            <Text style={{ paddingBottom: 50 }} s>
              {LABELS.print2}
            </Text>
          </FadeAnimation>
        </MidWrapper>
      </MaxWidthContent>
    </ExternalWrapper>
  );
};
