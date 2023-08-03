import React from 'react'
import "./Cyber.css"

import hsh from "../../Images/hsh.png";



const Cyber2 = () => {
  return (
    <>
              {/* Seconds div start */}
      <div id="second_main_div_sec">
        <div className="sec_div_sub1">
          <p className="sec_para1" data-aos="fade-down">
            <span className="sec_text_inc"> W</span>E
            <span className="sec_text_inc"> R</span>UN
            <span className="sec_text_inc"> A</span>LL
            <span className="sec_text_inc"> K</span>INDS
            <span className="sec_text_inc"> O</span>F
            <span className="sec_text_inc"> C</span>YBER
            <span className="sec_text_inc"> S</span>ECURITY <br />
            <span className="sec_text_inc"> S</span>ERVICES
            <span className="sec_text_inc"> T</span>HAT
            <span className="sec_text_inc"> Y</span>OUR
            <span className="sec_text_inc"> S</span>YSTEM
            <span className="sec_text_inc"> R</span>EQUIRED
          </p>

          <p className="sec_para2" data-aos="fade-up">
            Our cyber security mechanism defending computers servers mobile
            devices vectronic systems, network systems and data from malicious
            attacks, it's also known as information Technology security or
            electronic information security. <br />
            Cyber security focuses on protecting computer systems from
            unauthorized access or being otherwise damaged or made inaccessible
            information security is a broader category that looks to protect all
            information assets whether in hardcopy dotal form
          </p>
        </div>

        <div className="sec_div_sub2">
          <img className="security_img" src={hsh} />
        </div>
      </div>
      {/* Second section ends */}


    </>
  )
}

export default Cyber2