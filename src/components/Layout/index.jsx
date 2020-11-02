import React from "react";
import {
  FIRST_COLOR,
  FOURTH_COLOR,
  SECOND_COLOR,
  THIRD_COLOR,
} from "constants/palette";
import { About } from "components/About";
import { Header } from "components/Header";
import { HeroSection } from "components/HeroSection";
import { Wave } from "components/Wave";
import { Graphics } from "components/Graphics";
import { Colors } from "components/Colors";
import { Stamp } from "components/Stamp";

export const Layout = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", top: 0, zIndex: 10 }}>
        <Header />
      </div>
      <div style={{ marginTop: 68, width: "100%" }}>
        <HeroSection />
        <Wave color={FIRST_COLOR} />
        <About />
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
      </div>
    </>
  );
};
