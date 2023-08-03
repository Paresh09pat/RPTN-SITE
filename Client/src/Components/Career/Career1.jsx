import React, { useEffect } from "react";
import "./Career.css";

function Career1() {

    useEffect(() => {
        AOS.init();
      });
  return (
   <>
   <div>
        <div className="main">
          <div className="part1 ">
            <div className="head1p">
              <h2 className="head1p_head" data-aos="fade-right">
                <span style={{ color: "#161515" }}>YOU ARE </span>
                <span style={{ color: "rgb(250, 243, 243)" }}>TRYING TO </span>
                <span style={{ color: "#161515" }}>
                  BE SUCCESSFUL, <br />
                </span>
                <span style={{ color: "rgb(250, 243, 243)" }}>
                  WE ARE READY
                </span>
                <span style={{ color: "#161515" }}>
                  TO PROVIDE TO MANY IMPROVED SOLUTIONS TO
                </span>
                <span style={{ color: "rgb(250, 243, 243)" }}>MEET </span>
                <span style={{ color: "#161515" }}>YOUR DIFFERENT </span>
                <span style={{ color: "rgb(250, 243, 243)" }}>NEEDS </span>
                <span style={{ color: "#161515" }}>.</span>
              </h2>
              <div className="text_1" data-aos="fade-left">
                <p className="head1p_para">
                  People involved ideapreneurship take an active role in
                  innovation.They innovate ,collaborate,and foster ideas with
                  each other and with customers.The focus on innovation and
                  collabration has generated a number of significant encouraging
                  and supporting elements that facilitate a buisiness impact.
                </p>
                <div className="arrow_right fortopsec">
                  <span className="fr"></span>

                  <span className="fr"></span>

                  <span className="fr"></span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Career1