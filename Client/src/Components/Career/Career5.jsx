import React, { useEffect } from "react";
import "./Career.css";
import SvgComponent from "../../Components/Svg1";

function Career5() {

    useEffect(() => {
        AOS.init();
      });
  return (
   <>
    <div className="part5">
        <div className="contact_container container">
          <h1 className="contact_container_head">CONTACT US</h1>
          <div className="info" data-aos="fade-out">
            <h2 className="call">CALL FOR ADVICE</h2>
            <h3 className="c">9172912622</h3>
            <br />
            <br />
            <h2 className="call">SAY HELLO</h2>
            <h3 className="emailr">contact@rptechnovelty.com</h3>
            <div className=" carrer_readmore__main">
              <button className="carrer_readmore__button">
                <div className="d-flex  align-content-center ">
                  <h4 className="btn_text_carrer">contact us</h4>
                  <div className="vis_arrow_right_carrer">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </button>
            </div>
            {/* <div class="svg1"><img src={} alt="svg-img" class="svg-img1"></div> */}
            <SvgComponent className="svg1" />
          </div>
        </div>
      </div>
   </>
  )
}

export default Career5