import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";

import Print from "images/print.png";
import Embroidery from "images/embroidery.png";

import { ExternalWrapper, Title, Text, MidWrapper } from "./styled";

export const Stamp = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <ExternalWrapper isMobile={isMobile}>
      <MidWrapper isMobile={isMobile}>
        <Title>STAMPA</Title>
        <Text style={{ marginBottom: 50 }}>{LABELS.graphics}</Text>
        <img
          alt="print"
          src={Print}
          style={{ width: "100%", paddingBottom: 50 }}
        />
      </MidWrapper>
      <MidWrapper isMobile={isMobile}>
        <Title>RICAMO</Title>
        <img
          alt="embroidery"
          src={Embroidery}
          style={{ width: "100%", marginBottom: 50 }}
        />
        <Text style={{ paddingBottom: 50 }} s>
          {LABELS.graphics}
        </Text>
      </MidWrapper>
    </ExternalWrapper>
  );
};