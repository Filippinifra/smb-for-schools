import React, { useEffect, useState } from "react";
import { ContainerLoader, ContainerElements } from "./styled";

import logoSmbForShools from "images/logoSmbForSchools.png";

export const Loader = ({ children }) => {
  const [loaderStep, setLoaderStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoaderStep(1);
      setTimeout(() => {
        setLoaderStep(2);
      }, 2000);
    }, 2900);
  }, []);

  return (
    <>
      {
        <ContainerLoader loaderStep={loaderStep}>
          <ContainerElements>
            <img alt="logoSmbForShools" src={logoSmbForShools} height="150px" />
          </ContainerElements>
        </ContainerLoader>
      }
      {children}
    </>
  );
};
