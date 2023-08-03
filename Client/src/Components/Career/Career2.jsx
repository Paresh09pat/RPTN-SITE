import React, { useEffect } from "react";
import "./Career.css";
import img1 from "../../Images/number2.png";

function Career2() {

    useEffect(() => {
        AOS.init();
      });
  return (
<>
<div className="part2">
        <div className="section2">
          <div className="section2_wrapper">
            <div data-aos="fade-up-right">
              <img src={img1} alt="img1" className="icon1" />
              <h2 id="imghead">YEARS OF EXPERIENCE IN IT</h2>
            </div>
            <center data-aos="fade-up-left">
              <h1 className="imghead_more">
                LEARN MORE ABOUT OUR SUCCESS STORIES
              </h1>
            </center>
          </div>
        </div>
        <div className="carrer_box" data-aos="zoom-in">
          <div className="progress-section">
            <div className="container">
              <h2 className="progress_sec_h2">SOCIAL PROBLEM STUDY</h2>
              <div className="pr1">
                <div className="progress-bar">
                  <div className="progress1"></div>
                </div>
                <span className="dot1"></span>
              </div>
              <h2 className="progress_sec_h2">MARKET STUDY</h2>
              <div className="pr2">
                <div className="progress-bar">
                  <div className="progress2"></div>
                </div>
                <span className="dot2"></span>
              </div>

              <h2 className="progress_sec_h2">YOUTH DEVELOPMENT</h2>
              <div className="pr3">
                <div className="progress-bar">
                  <div className="progress3"></div>
                </div>
                <span className="dot3"></span>
              </div>

              <h2 className="progress_sec_h2">EDUCATIONAL STUDY </h2>
              <div className="pr4">
                <div className="progress-bar">
                  <div className="progress4"></div>
                </div>
                <span className="dot4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Career2