import React from "react";
import "./Home.css";
import Me from "../../assets/avatar2.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Madhu Chandrika M R</h1>
        <span className="home_education">I'm a Web developer</span>
        <HeaderSocials />

        <a href="#contact" className= "btn"> Hire Me </a>
        <ScrollDown/>
      </div>
      <Shapes/>

    </section>
  );
};

export default Home;
