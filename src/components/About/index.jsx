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
import { LABELS } from "constants/labels";
import { MaxWidthContent } from "components/MaxWidthContent";
import { FOURTH_COLOR } from "constants/palette";

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
        <ContactItem>
          <a
            style={{
              all: "unset",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            href="tel:+39 342 7636758"
          >
            +39 342 7636758 ALBERTO
          </a>
        </ContactItem>
        <ContactItem>
          <a
            style={{
              all: "unset",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            href="mailto:saintmaryboulevard@gmail.com?subject=Richiesta"
          >
            SAINTMARYBOULEVARD@GMAIL.COM
          </a>
        </ContactItem>
        <ContactItem>
          <a
            style={{
              all: "unset",
              textDecoration: "underline",
              cursor: "pointer",
              color: FOURTH_COLOR,
            }}
            href="https://www.instagram.com/smb.for.schools/"
            target="_blank"
            rel="noreferrer"
          >
            @SMB.FOR.SCHOOLS
          </a>
        </ContactItem>
        <ContactItem style={{ marginBottom: 20 }}>
          <a
            style={{
              all: "unset",
              textDecoration: "underline",
              cursor: "pointer",
              color: FOURTH_COLOR,
            }}
            href="https://www.instagram.com/saint.mary.boulevard/"
            target="_blank"
            rel="noreferrer"
          >
            @SAINT.MARY.BOULEVARD
          </a>
        </ContactItem>
        <ContactItem>P.IVA 04477820239</ContactItem>
        <ContactItem>SINCE 2015, VERONA</ContactItem>
      </Element>
    </InfoWrapper>
  );

  const Description = () => <Text isMobile={isMobile}>{LABELS.about}</Text>;

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
      <MaxWidthContent>
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
      </MaxWidthContent>
    </ExternalWrapper>
  );
};
