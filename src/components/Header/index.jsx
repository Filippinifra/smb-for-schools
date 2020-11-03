import React from "react";
import {
  HeaderWrapper,
  MenuItem,
  RightWrapper,
  SubTitle,
  Title,
} from "./styled";

import { scroller, animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const handleMenuClick = (idElement) =>
    scroller.scrollTo(idElement, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <HeaderWrapper>
      <div
        onClick={scrollToTop}
        style={{
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Title>SMB</Title>
        <SubTitle>FOR SCHOOLS</SubTitle>
      </div>
      <RightWrapper>
        <MenuItem onClick={() => handleMenuClick("whatWeDo")}>
          COSA FACCIAMO
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("products")}>
          I NOSTRI LAVORI
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("about")}>ABOUT US</MenuItem>
        <MenuItem onClick={() => handleMenuClick("contacts")}>
          CONTATTI
        </MenuItem>
      </RightWrapper>
    </HeaderWrapper>
  );
};
