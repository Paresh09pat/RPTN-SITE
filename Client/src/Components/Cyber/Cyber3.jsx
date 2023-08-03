import React from "react";
import "./Cyber.css";

import lock from "../../Images/lock.jpeg";
import meet from "../../Images/meet.jpg";
import quality from "../../Images/quality.jpg";
// import call from "../Images/call.svg";

const Cyber3 = () => {
  return (
    <>
      {/* Third Section Starts */}

      <div className="third_main_div_sec">
        <p className="third_sec_col_div" data-aos="fade-down">
          <span className="col_text_increase">W</span>HATS
          <span className="col_text_increase"> M</span>AKE
          <span className="col_text_increase"> U</span>S
          <span className="col_text_increase"> D</span>IFFERENT
        </p>

        <div id="th_card_div_main">
          <div className="th_card_div_sub MLEFT">
            <img
              data-aos="fade-down"
              className="th_sec_cards_pic"
              src={quality}
            />
            <p data-aos="fade-up" className="th_sec_card_headText">
              Quality Assurance System
            </p>
            <p data-aos="fade-up" className="th_sec_card_sim_Text">
              At RPTN we have a holistic and <br />
              integrated approach towards core <br />
              modernization to experience
              <br />
              technological evolution
            </p>
          </div>

          <div className="th_card_div_sub MLEFT">
            <img data-aos="fade-down" className="th_sec_cards_pic" src={meet} />
            <p data-aos="fade-up" className="th_sec_card_headText">
              Highly Professional Staffs
            </p>
            <p data-aos="fade-up" className="th_sec_card_sim_Text">
              Having obtained the official & formal <br />
              training in IT technology and <br />
              technical fields, our staffs know best
            </p>
          </div>

          <div className="th_card_div_sub">
            <img data-aos="fade-down" className="th_sec_cards_pic" src={lock} />
            <p data-aos="fade-up" className="th_sec_card_headText">
              Info Security Management
            </p>
            <p data-aos="fade-up" className="th_sec_card_sim_Text">
              At RPTN we have a holistic and <br />
              integrated approach towards core <br />
              modernization to experience <br />
              technological evolution
            </p>
          </div>
        </div>
      </div>

      {/* Third Section Ends */}
    </>
  );
};

export default Cyber3;
