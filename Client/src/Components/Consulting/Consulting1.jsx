import React from "react";
import icon1 from "../../Images/icon1.png";
import icon11 from "../../Images/icon11.png";
import "./Consulting.css";

const Consulting1 = () => {
  return (
    <>
      {/* Section 1 Start */}
      <div className="p1">
        <div className="section1">
          <div className="paras1Cons" data-aos="fade-down">
            <div className="vl">
              <h2 className="sec1_head">
                &nbsp;START HOME TO SMART CITIES
                <br />
                &nbsp;IOT GROWTH IS HAPPENING
              </h2>
            </div>
            <br />
            <p className="textp1">
              At this point, it may seem like over all to point <br />
              the continued growth bound happen in the
              <br />
              internet for things space for the years to come and
              <br />
              how it will create new opportunities for companies,
              <br />
              both established and new ,from a hardware and <br />
              softeware perspective
            </p>
          </div>
          <br />
          <div className="s1Icon" data-aos="fade-up">
            <img src={icon1} id="icon1Cons" />
            <img src={icon11} id="icon11Cons" />
          </div>
        </div>
      </div>
      {/* Section 1 End */}
    </>
  );
};

export default Consulting1;
