import { LABELS } from "constants/labels";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Slideshow } from "./Slideshow";

import Polaroid from "images/polaroid.PNG";
import { ExternalWrapper, Text, Title } from "./styled";

import { useStaggered } from "hooks/useStaggered";

export const WhatWeDo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const { ref, height } = useStaggered(0.8);

  return (
    <ExternalWrapper>
      <Title isMobile={isMobile}>COSA FACCIAMO</Title>
      <div style={{ display: isMobile ? "" : "flex", alignItems: "center" }}>
        <Text
          style={{
            marginTop: 50,
            marginBottom: 50,
            padding: isMobile ? "0 20px" : "0 50px",
            width: isMobile ? "auto" : "65%",
          }}
        >
          {LABELS.smbForSchools}
        </Text>
        <div
          style={{
            padding: isMobile ? "0 20px" : "0 50px",
            width: isMobile ? "auto" : "35%",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <Slideshow />
        </div>
      </div>
      <div style={{ width: "80vw", height }}>
        <img
          alt="polaroid"
          src={Polaroid}
          style={{ width: "100vw" }}
          ref={ref}
        />
      </div>
    </ExternalWrapper>
  );
};
