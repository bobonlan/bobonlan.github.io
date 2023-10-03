import { useState, useEffect } from "react";
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

export const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};

export function Spotify() {
  return (
      <div>
        <iframe style={{borderRadius: '12px'}}
        src={"https://open.spotify.com/embed/playlist/2LqNBpgud2LkuHYcA4KPCn?utm_source=generator"}
        width={"45%"}
        height={"156rem"}
        allowFullScreen={"true"}
        allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
        loading={"lazy"}
        align={"left"}></iframe>
      </div>
    
  );
}