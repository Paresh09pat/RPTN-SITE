import React from "react";
import meeting from "../../Images/meeting.jpg";
import "./Expertise.css"

const Expertise2 = () => {
  return (
    <>
      {/* section second start */}

      <div id="THSEC_second_main_div">
        <div className="THSEC_second_sec_card_main">
          <div className="THSEC_second_sec_subcard" data-aos="fade-right">
            <img className="meet_pic" src={meeting} />
          </div>

          <div className="THSEC_second_sec_subcard " data-aos="zoom-out">
            <p className="classfortext">
              <span style={{ fontSize: "25px" }}>Y</span>OU KNOW YOU DID RIGHT
              WHEN ALL <br /> YOUR EFFORT STARTED TO PAY OFF IN <br /> AN
              UNEXPECTED AND IMPRESSIVE WAY.
              <br />
              <span style={{ fontSize: "22px" }}>RPTN</span> BRINGS CLIENTS AND
              <br /> BUSINESSES TOGETHER IN A FAIR
              <br /> PLAY FIELD.
            </p>

            <p className="rptn_CT">
              RPTN <br />
              <span className="rptn_normal"> Consulting Services</span>
            </p>
          </div>
        </div>
      </div>

      {/* section second end */}
    </>
  );
};

export default Expertise2;
