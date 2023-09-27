import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { optimizedAppearDataAttribute } from "framer-motion";
import Button1 from "./routes/button1";
import Button2 from "./routes/button2";
import Button3 from "./routes/cool-links";
import { Route, Routes } from "react-router-dom";
import Balls from "./routes/balls";
import ErrorPage from "./error-page";

export function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Balls />} errorElement={ErrorPage} />
          <Route path="/button1" element={<Button1 />} />
          <Route path="/button2" element={<Button2 />} />
          <Route path="/cool-links" element={<Button3 />} />
        </Routes>
      </div>
    </>
  );
}

export function Welcome() {
  return (
    <h2>
      Welcome to bobonlan.com. This website will be a hub for all things I do.
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
