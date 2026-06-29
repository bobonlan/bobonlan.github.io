import "./App.css";
import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FormButton from "./routes/form";
import Button3 from "./routes/cool-links";
import BlogPost from "./routes/BlogPost";
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
          <Route path="/cool-links" element={<Button3 />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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