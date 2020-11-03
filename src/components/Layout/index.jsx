import React, { useEffect } from "react";
import {
  FIRST_COLOR,
  FOURTH_COLOR,
  SECOND_COLOR,
  THIRD_COLOR,
} from "constants/palette";
import { WhatWeDo } from "components/WhatWeDo";
import { Header } from "components/Header";
import { HeroSection } from "components/HeroSection";
import { Wave } from "components/Wave";
import { Graphics } from "components/Graphics";
import { Colors } from "components/Colors";
import { Stamp } from "components/Stamp";
import { Products } from "components/Products";

import { Element } from "react-scroll";
import { About } from "components/About";

import { animateScroll as scroll } from "react-scroll";

export const Layout = () => {
  useEffect(() => {
    scroll.scrollTo(1);
  }, []);
  return (
    <>
      <div style={{ position: "fixed", width: "100%", top: 0, zIndex: 10 }}>
        <Header />
      </div>
      <div style={{ marginTop: 68, width: "100%" }}>
        <HeroSection />
        <Element name={"whatWeDo"}>
          <Wave color={FIRST_COLOR} />
          <WhatWeDo />
          <Wave color={FIRST_COLOR} isInverted={false} bgColor={FOURTH_COLOR} />
          <Graphics />
          <Wave
            color={FOURTH_COLOR}
            isInverted={false}
            bgColor={SECOND_COLOR}
            style={{ zIndex: 8 }}
          />
          <Colors />
          <Wave color={THIRD_COLOR} bgColor={SECOND_COLOR} />
          <Stamp />
        </Element>
        <Element name={"products"}>
          <Wave color={FOURTH_COLOR} bgColor={THIRD_COLOR} />
          <Products />
        </Element>
        <Element name={"about"}>
          <Wave color={FIRST_COLOR} bgColor={FOURTH_COLOR} />
          <About />
        </Element>
      </div>
    </>
  );
};
