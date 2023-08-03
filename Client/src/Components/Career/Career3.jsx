import React, { useEffect } from "react";
import "./Career.css";

function Career3() {

    useEffect(() => {
        AOS.init();
      });
  return (
  <>
  <div className="FSNC_sixth_sec_main_div_carrer">
        <p className="FSNC_sixth_sec_main_head_carrer">
          <span className="make_bold_carrer"></span>
          <span className="make_bold_carrer"></span>
        </p>

        <div className="FSNC_sixth_sec_three_card_carrer">
          <div
            className="FSNC_sixth_sec_three_card_carrer_sub JAURI BR2"
            data-aos="flip-left"
          >
            <div className="c1_card">
              <h5 className="one_side_border_sixth">
                EFFICACIOUS MANAGEMENT SYSTEM
              </h5>
            </div>
            <p className="unemp">
              our technical experts have a natural talent for creating clearly
              coded websites that are based on the needs of our customers global
              guidelines,and current trends
            </p>
          </div>

          <div
            className="FSNC_sixth_sec_three_card_carrer_sub JAURI BR2"
            data-aos="flip-right"
          >
            <div className="c11_card">
              <h5 className="one_side_border_sixth">
                DATABASE SECURITY THAT WORKS
              </h5>
            </div>
            <p className="unemp">
              To create and maintain database privacy,and availability, we offer
              our clients with a variety of tools,controls, and solutions
            </p>
          </div>

          <div
            className="FSNC_sixth_sec_three_card_carrer_sub BR2"
            data-aos="flip-left"
          >
            <div className="c12_card">
              <h5 className="one_side_border_sixth">
                STATE-OF-THE-ART,
                <br /> REALIABLE MULTI-FUNCTION TECHNOLOGY
              </h5>
            </div>
            <p className="unemp">
              RPTN utilizes multi-function technology to develop tailored
              solutions for customers needs.Multi-function technology responds
              to certain control signals or running speeds
            </p>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default Career3