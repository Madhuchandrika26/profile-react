import React from 'react';
import "./Services.css";


const data = [
  {
    id: 1,
    
    title: "Seminar Hall Booking System",
    specification:" PHP MySQL",
   
    description:
      "To design and develop an online seminar hall booking application which allow users to book seminar hall as per their expected event schedules.",
  },
  {
    id: 2,
    
    title: "RFID card Attendance System",
    specification:"Internet of Things",
    description:
      "This project contains automated RFID based attendance system that allows automatic marking of attendance using RFID tags/cards. Every students or employee have a unique authorization id that is used for to scan",
  },
  {
    id: 3,
   
    title: "MCET Faculty and Student management system",
    specification:" PHP MySQL",
    description:
      "Created a user-friendly web-based data management system for MCET faculty and students, providing centralized organization and easy data retrieval and analysis.",
  },
  {
    id: 4,
  
    title: "A survey on online education and work from home",
    specification:" R Programming",
    description:
      "The study was conducted to explore the students and people's satisfaction level on online education and work from home.",
  },
];
const Services = () => {
  return <section className="services container section" id="services">
    <h2 className="section_title">Projects</h2>
  <div className="services_container grid">
    {data.map(({id,title,specification,description})=>{
      return(
        <div className="services_card" key={id}>

        <h3 className="services_title">{title}</h3>
        <h4 className='services_title1'>{specification}</h4>
        <p className="services_description">{description}</p>
        
        </div>
      )
    }
    )}
  </div>
  </section>
    
    
}

export default Services