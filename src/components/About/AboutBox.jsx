import React from 'react'

const AboutBox = () => {
  return (
   <div className="about_boxes grid">
    <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
            <h3 className="about_title">4</h3>
            <span className="about_subtitle">Projects</span>
        </div>
    </div>

    <div className="about_box">
        <i className="about_icon icon-people"></i>
        <div>
            <h3 className="about_title">1</h3>
            <span className="about_subtitle">Happy Client</span>
        </div>
    </div>

    <div className="about_box">
        <i className="about_icon icon-graduation"></i>
        <div>
            <h3 className="about_title">10</h3>
            <span className="about_subtitle">Certificate Courses</span>
        </div>
    </div>

    <div className="about_box">
        <i className="about_icon icon-star"></i>
        <div>
            <h3 className="about_title">5</h3>
            <span className="about_subtitle">Awards</span>
        </div>
    </div>

   </div>
  )
}

export default AboutBox