import React from "react";
import "./Expertise.css"

const Expertise4 = () => {
  return (
    <>
      {/* section fourth starts */}

      <div id="THSEC_fourth_main_div">
        <p className="THSEC_fourth_sec_HEAD_TEXT">
          <span className="THSEC_fourth_sec_text_inc">H</span>OW
          <span className="THSEC_fourth_sec_text_inc"> W</span>E
          <span className="THSEC_fourth_sec_text_inc"> C</span>LAIM
          <span className="THSEC_fourth_sec_text_inc"> T</span>O
          <span className="THSEC_fourth_sec_text_inc"> E</span>XCLE?
        </p>

        <div className="THSEC_fourth_sec_main_card ">
          <div
            className="THSEC_fourth_sec_sub_card some_space card__1"
            data-aos="zoom-in-down"
          >
            <p className="THSEC_fourth_sec_sub_card_HT">PROMPT HELP</p>
            <p className="THSEC_fourth_sec_sub_card_NT ">
              We give prompt help desk answer right when receiving the request
              from customers.
            </p>
          </div>

          <div
            className="THSEC_fourth_sec_sub_card some_space card__2"
            data-aos="zoom-in-up"
          >
            <p className="THSEC_fourth_sec_sub_card_HT">SOUND ADVICE</p>
            <p className="THSEC_fourth_sec_sub_card_NT">
              Knowledge come with age and time Our experts make sure it works.
            </p>
          </div>

          <div
            className="THSEC_fourth_sec_sub_card some_space card__3"
            data-aos="zoom-in-down"
          >
            <p className="THSEC_fourth_sec_sub_card_HT">ZERO RISK</p>
            <p className="THSEC_fourth_sec_sub_card_NT">
              No nisking factors are present and we have all kinds of measures
              to protect against losses.
            </p>

            <div className="arrow_right">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className="THSEC_fourth_sec_sub_card some_space card__4"
            data-aos="zoom-in-up"
          >
            <p className="THSEC_fourth_sec_sub_card_HT">TECH SAVVY</p>
            <p className="THSEC_fourth_sec_sub_card_NT">
              Technological arise plans are made for addressing att kinds of
              requests and demandS.
            </p>
          </div>

          <div
            className="THSEC_fourth_sec_sub_card card__5"
            data-aos="zoom-in-down"
          >
            <p className="THSEC_fourth_sec_sub_card_HT"> SATISFIED </p>
            <p className="THSEC_fourth_sec_sub_card_NT">
              100% of our current and recurring customers feel satisfied with
              the final results.
            </p>
          </div>
        </div>
      </div>

      {/* section fourth end */}
    </>
  );
};

export default Expertise4;
