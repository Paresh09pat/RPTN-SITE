import React from "react";
import "./Cyber.css";
import CallSvg from "../Callsvg/CallSvg";


const Cyber6 = () => {
  return (
    <>
      {/* Sixth Section Start */}

      <div id="sixth_main_div_sec">
        <h2 className="sixth_sec_head_div" data-aos="fade-down">
          <span className="SSTFLIN">L</span>ETS
          <span className="SSTFLIN"> M</span>AKE
          <span className="SSTFLIN"> T</span>HE
          <span className="SSTFLIN"> S</span>YSTEM
          <span className="SSTFLIN"> P</span>ROTECTED
        </h2>

        <div className="sixth_sec_sub_div SSMLB">
          <CallSvg />
        </div>

        <div className="sixth_sec_sub_div">
          <p className="callforadvice">
            <span className="CFATI">C</span>ALL <span className="CFATI">F</span>
            OR <span className="CFATI">A</span>DVICE
          </p>
          <p>
            <a
              href="tel:+91 9172912622"
              target="_blank"
              className="contact text-white "
            >
              +91 9172912622
            </a>
          </p>
          <p className="sayhello">
            <span className="CFATI">S</span>AY <span className="CFATI">H</span>
            ELLO
          </p>
          <p>
            <a
              className="commail"
              href="mailto:contact@rptechnovelty.com"
              target="_blank"
            >
              contact@rptechnovelty.com
            </a>
          </p>
          {/* <!-- left arrow --> */}
          <div className="readmore__main_cyber">
            <button className="readmore__button_cyber">
              <div className="d-flex  align-content-center contactus">
                Contact Us
                <div className="vis_arrow_right2_p2">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Sixth Section End */}
    </>
  );
};

export default Cyber6;
