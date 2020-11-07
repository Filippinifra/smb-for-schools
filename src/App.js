import React from "react";
import { Layout } from "./components/Layout";

import "./styles.css";
import GlobalStyle from "./styled.js";
import { Loader } from "components/Loader";

const App = () => (
  <>
    <GlobalStyle />
    <Loader>
      <Layout />
    </Loader>
  </>
);

export default App;
