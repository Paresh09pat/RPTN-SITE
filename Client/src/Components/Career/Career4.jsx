import React, { useEffect } from "react";
import "./Career.css";

function Career4() {

    useEffect(() => {
        AOS.init();
      });
  return (
    <>
    <div className="part4">
        <div className="section411">
          <div className="text-41" data-aos="fade-right">
            <h4 className="text-41-h4">HOW WE WORK</h4>
            <h2 className="text41-h2">HOW IT HELP YOUR BUSINESS SUCCEED</h2>
          </div>
          <div className="column4">
            <div className="projection-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <center>
              <div className=" c41 container" data-aos="fade-left">
                <div className=" r1 row">
                  <div className="r41 col order-first">
                    <div>
                      <h1 className="c41_h1">Q.1 Descussion</h1>
                    </div>
                    <p className="c41_para">
                      We meet customers is set place to discuss the details
                      about needs and demands before proposing plan.
                    </p>
                  </div>
                  <div className="r41 col">
                    <div>
                      <h1 className="c41_h1">Q2.Concepts & Initiatives</h1>
                    </div>
                    <p className="c41_para">
                      Our customers ends up with all kind of ideas and and
                      Initiatives for delivering the best solutions of IT
                      services chosen.
                    </p>
                  </div>
                  <div className="r41 col ">
                    <div>
                      <h1 className="c41_h1">Testing and Trying</h1>
                    </div>
                    <p className="c41_para">
                      After agreeing on the ideas and plans,we will conduct as
                      scheduled and give commentson the results & adaptation.
                    </p>
                  </div>
                  <div className="r41 col order-last">
                    <div>
                      <h1 className="c41_h1">Execute & install</h1>
                    </div>
                    <p className="c41_para">
                      Once the final plan is approved, everything will conducted
                      according to the agreed contract.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Career4