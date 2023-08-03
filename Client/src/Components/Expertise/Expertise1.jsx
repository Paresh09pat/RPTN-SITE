import React from "react";
import "./Expertise.css"

const Expertise1 = () => {
  return (
    <>
      {/* section first start */}
      <div id="THSEC_first_main_div">
        <p className="THSEC_first_page_head">
          <span className="FSHEADTEXTINC">M</span>AKE
          <span className="FSHEADTEXTINC"> Y</span>OUR
          <span className="FSHEADTEXTINC"> L</span>IFE
          <span className="FSHEADTEXTINC"> E</span>ASIER
          <span className="FSHEADTEXTINC"> W</span>ITH
          <span className="FSHEADTEXTINC"> H</span>ELP
          <span className="FSHEADTEXTINC"> F</span>ROM
          <span className="FSHEADTEXTINC"> RPTN</span>
        </p>

        <p className="FS_HEAD_TEXT_SIM">
          <span style={{ fontSize: "28px" }}>T</span>EAM UP WITH THE BEST
          COLLABORATION FROM THE RIGHT EXPERTISES.
        </p>

        <p style={{ marginTop: "90px" }} className="FS_HEAD_PARA">
          Booking is open today with profitable <br /> incentives for beginners.
        </p>

        <div data-aos="fade-down" className="first_main_div_input">
          <input className="inp_field" placeholder="Email . ." />
          <input
            className="inp_field"
            placeholder="Select Department to Email . ."
          />
          <br />
          <br />
          <button className="btn"> Get a free Consultation</button>
        </div>

        <div className="arrow_right_downwards">
          <span className="fr"></span>
          <span className="fr"></span>
          <span className="fr"></span>
        </div>
      </div>
      {/* section first end */}
    </>
  );
};

export default Expertise1;
