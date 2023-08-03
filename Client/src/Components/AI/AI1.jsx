import React, { useEffect } from "react";
import "./AI.css";

const AI1 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div id="maindiv_first">
        <div className="colortext_div">
          <p className="colortext" data-aos="zoom-in-down">
            <span className="inc">E</span>XPERIENCE
            <span className="inc"> T</span>HE <span className="inc"> P</span>
            OWER
            <br /> <span className="inc"> O</span>F
            <span className="inc"> I</span>
            NFORMATION
            <span className="inc"> T</span>HROUGH
          </p>
          <p className="under_color" data-aos="zoom-in-down">
            <span className="inc1">T</span>HE <span className="inc1">L</span>
            ENSES <span className="inc1">O</span>F
            <span className="inc1">AI</span>
          </p>
        </div>

        <div className="simple_text" data-aos="zoom-in-up">
          AI FACILITATE THE CREATION OF A <br />
          NEXT-GENERATION WORKPLACE FOR <br />
          BETTERMENT OF HUMANITY.
        </div>
      </div>
    </>
  );
};

export default AI1;
