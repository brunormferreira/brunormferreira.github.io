import React from "react";

import { ScrollContextProvider } from "./context/scroll";

import Nav from "./components/Nav";
import Content from "./components/Content";

import GlobalStyles from "./styles";

export default () => (
  <>
    <GlobalStyles />
    <ScrollContextProvider>
      <Nav />
      <Content />
    </ScrollContextProvider>
  </>
);
