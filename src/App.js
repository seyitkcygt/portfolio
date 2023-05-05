import React from "react";
import { Home } from "./pages";
import { GlobalStyle } from "./constants/globalStyle/globalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
