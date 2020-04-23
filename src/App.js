import React from "react";

import Nav from "./components/Nav";
import Content from "./components/Content";
import GlobalStyles from "./styles";

import { StateProvider } from "./store";

export default () => (
  <>
    <GlobalStyles />
    <StateProvider>
      <Nav />
      <Content />
    </StateProvider>
  </>
);
