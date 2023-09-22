import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <h1>bobonlan.com</h1>
    </ChakraProvider>
  );
}

export function Welcome() {
  return (
    <h2>
      Welcome to bobonlan.com. This website will be a PISS TIT for all things I
      do.
    </h2>
  );
}
export function BasicButton({ buttonName, linkTo }) {
  return (
    <div>
      <a href={linkTo} target={"_blank"}>
        <button className="basicButton">{buttonName}</button>
      </a>
    </div>
  );
}
export default App;
