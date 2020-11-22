import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}
