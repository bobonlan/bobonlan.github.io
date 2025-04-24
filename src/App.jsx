import "./App.css";
import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormButton from "./routes/form";
import AboutButton from "./routes/about";
import Button3 from "./routes/cool-links";
import MinesweeperButton from "./routes/minesweeperbutton";
import { Route, Routes } from "react-router-dom";
import Balls from "./routes/balls";

export function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Balls />} />
          <Route path="/form" element={<FormButton />} />
          <Route path="/about" element={<AboutButton />} />
          <Route path="/cool-links" element={<Button3 />} />
          {/*<Route path="/minesweeper" element={<MinesweeperButton />} />*/}
        </Routes>
        <Footer />
      </div>
    </>
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
