import React from "react";
import {
  HeaderWrapper,
  MenuItem,
  RightWrapper,
  SubTitle,
  Title,
} from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Title>SMB</Title>
        <SubTitle>FOR SCHOOLS</SubTitle>
      </div>
      <RightWrapper>
        <MenuItem>COSA FACCIAMO</MenuItem>
        <MenuItem>I NOSTRI LAVORI</MenuItem>
        <MenuItem>ABOUT US</MenuItem>
        <MenuItem>CONTATTI</MenuItem>
      </RightWrapper>
    </HeaderWrapper>
  );
};
