import "./App.css";
import * as React from "react";
import Navbar from "./Navbar";
import Button1 from "./routes/button1";
import Button2 from "./routes/button2";
import Button3 from "./routes/cool-links";
import { Route, Routes } from "react-router-dom";
import Balls from "./routes/balls";

export function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Balls />} />
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

const YoutubeEian1 = () => {
  return (
    <iframe
      width="560px"
      height="315px"
      src="https://www.youtube.com/embed/skAmLoapFaE?si=jh23hrn2ZKVvat45"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen="true"
    ></iframe>
  );
};

export { YoutubeEian1 };

const YoutubeEian2 = () => {
  return (
    <iframe
      width="841"
      height="913"
      src="https://www.youtube.com/embed/kKcA-ocLhN4?si=KnGMxdH9KADycI1d"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export { YoutubeEian2 };

const YoutubeEian3 = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/jPKaiJjR7ts?si=q-ruexBNPOfs7Th6"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen="true"
    ></iframe>
  );
};

export { YoutubeEian3 };
