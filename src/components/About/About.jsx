import React from "react";
import "./About.css";
import Image from "../../assets/avatar1.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me </h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am an enthusiastic college student pursuing a degree in Master
              of Computer Application and actively seeking opportunities to
              begin my professional journey. With a strong academic background
              and passion for excellence, I am eager to contribute my skills and
              learn from experienced professionals in a dynamic work environment
            </p>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">HTML CSS</h3>
                <span className="skills_number ">100%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage html"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">Tableau</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage css "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">Java Script</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage js "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">PHP</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage php "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">Java</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage java "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">MySQL</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage sql"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">React Js</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage react"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">Node Js</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage node"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">R Programming</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage r"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">Spss</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage spss "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">MongoDB</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage mongo"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills">IOT</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage iot"></span>
              </div>
            </div>
           
           {/*<a href="" className="btn">
              Download CV
  </a>*/}
          </div>
          
        </div>
        
      </div>
      <AboutBox/>
      
    </section>
  );
};

export default About;



