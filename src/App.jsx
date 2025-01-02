//in this project I didn't see necessary to use context or react router just implemented these to see i can do it anyway
//in this project  I just practise tailwind css
import React from "react";
import JewelryHero from "./components/JewelryHero";
import Navbar from "./components/Navbar";
import AboutWare from "./components/AboutWare";
import ImgCaro from "./components/ImgCaro";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
function App() {
  return (
    <>
      <div className="animate-fadeIn p-6 lg:p-x-5    space-y-3 ">
        <Navbar />
        <JewelryHero />
        <AboutWare />
        <ImgCaro />{" "}
        <Footer/>

    </div>
    </>
  );
}

export default App;
