import React from "react";
import { useMediaQuery } from "react-responsive";

import LogoSmb from "images/logoSmb.png";
import LogoSmbForSchools from "images/logoSmbForSchools.png";
import {
  ExternalWrapper,
  Title,
  Text,
  ContactItem,
  InfoWrapper,
} from "./styled";
import { useGetWidth } from "hooks/useGetWidth";
import { Element } from "react-scroll";

export const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  const { ref, width } = useGetWidth();

  const CircleInfo = () => (
    <InfoWrapper
      ref={ref}
      style={{ height: width, maxWidth: 500, maxHeight: 500 }}
    >
      <Element name="contacts">
        <Title style={{ fontSize: 30, margin: "0 0 20px 0" }}>CONTATTI</Title>
        <ContactItem>+39 342 7636758 ALBERTO</ContactItem>
        <ContactItem>SAINTMARYBOULEVARD@GMAIL.COM</ContactItem>
        <ContactItem>@SMB.FOR.SCHOOLS</ContactItem>
        <ContactItem style={{ marginBottom: 20 }}>
          @SAINT.MARY.BOULEVARD
        </ContactItem>
        <ContactItem>P.IVA 04477820239</ContactItem>
        <ContactItem>SINCE 2015, VERONA</ContactItem>
      </Element>
    </InfoWrapper>
  );

  const Description = () => (
    <Text isMobile={isMobile}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections Contrary to popular belief,
    </Text>
  );

  const ImagesColumn = () => (
    <>
      <img
        src={LogoSmb}
        alt="logo_smb"
        style={{
          width: "100%",
          marginBottom: 20,
          maxWidth: isTablet ? "200px" : "100%",
        }}
      />
      <img
        src={LogoSmbForSchools}
        alt="logo_smb_for_schools"
        style={{ width: "100%", maxWidth: isTablet ? "200px" : "100%" }}
      />
    </>
  );

  return (
    <ExternalWrapper>
      <Title isMobile={isMobile}>ABOUT US</Title>
      {isTablet ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div style={{ width: "65%" }}>
              <Description />
            </div>
            <div style={{ width: "35%" }}>
              <ImagesColumn />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <CircleInfo />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "40%" }}>
            <Description />
          </div>
          <div
            style={{
              width: "60%",
              display: "flex",
              padding: isMobile ? "0 20px" : "0 50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "25%" }}>
              <ImagesColumn />
            </div>
            <div
              style={{
                width: "75%",
                marginLeft: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircleInfo />
            </div>
          </div>
        </div>
      )}
    </ExternalWrapper>
  );
};
