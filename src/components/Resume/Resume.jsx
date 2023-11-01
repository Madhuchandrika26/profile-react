import React from "react";
import "./Resume.css";
import Data from "./Data";
import Image from "../../assets/avatar2.png";
import Card from "./Card";


const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Education</h2>
      
      
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category == "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  cgpa={val.cgpa}
                />
              );
            }
          })}
          
        </div>
        <img src={Image} alt="" className="about_img1" />

        {/*<div className="resume_container grid">
          <div className="timeline grid">
            {Data.map((val, index) => {
              if (val.category == "experience") {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
            })}
          </div>
          </div>*/}
          </div>
 
    </section>
  );
};

export default Resume;
