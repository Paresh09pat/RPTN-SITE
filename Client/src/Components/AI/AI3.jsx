import React, {useEffect} from "react";
import "./AI.css"

const AI3 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* Third Section Starts */}
      <div id="maindiv_third">
        <p className="TS_ML_text" data-aos="zoom-in-down">
          MACHINE LEARNING
        </p>

        <p className="ts_stext" data-aos="zoom-in-down">
          <span className="ts_text_size">M</span>ACHINE
          <span className="ts_text_size"> L</span>EARNING
          <span className="ts_text_size"> T</span>O
          <span className="ts_text_size"> U</span>NDERSTAND <br />
          <span className="ts_text_size"> B</span>EHAVIORAL
          <span className="ts_text_size"> P</span>ATTERNS
          <span className="ts_text_size"> O</span>F
          <span className="ts_text_size"> D</span>ATA
        </p>

        <div className="third_subdiv">
          <div className="card_div">
            <p className="card_head" data-aos="zoom-in-down">
              <span className="card_text_inc">N</span>ATURAL
              <span className="card_text_inc"> L</span>ANGUAGE <br />
              <span className="card_text_inc"> P</span>ROCESSING
            </p>
            <p className="card_sim_text" data-aos="zoom-in-up">
              To understanding the natural language especially with proprietary
              and small data sets , we use different machine learning techniques
              along with additional NLP Palgorithms.
            </p>
          </div>

          <div className="card_div">
            <p className="card_head" data-aos="zoom-in-down">
              <span className="card_text_inc">V</span>ISION
              <span className="card_text_inc"> A</span>NALYTICS & <br />
              <span className="card_text_inc"> I</span>MAGE
              <span className="card_text_inc"> P</span>ROCESSING
            </p>
            <p className="card_sim_text" data-aos="zoom-in-up">
              Deep learning techniques includes innovative ways to deal with the
              process of domainspecific data set and solve to generic
              computational problems to get the practical solution.
            </p>
          </div>

          <div className="card_div">
            <p className="card_head" data-aos="zoom-in-down">
              <span className="card_text_inc">B</span>RAINSTORMING &
              <span className="card_text_inc">S</span>TACK <br />
              <span className="card_text_inc">O</span>F
              <span className="card_text_inc">T</span>ECHNOLOGY
            </p>
            <p className="card_sim_text" data-aos="zoom-in-up">
              To convert ideas into product, different technologies and skills
              like Machine Learning, Paython, Data Science, Java Script are
              stacked together to achieve fully functional product.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section Ends */}
    </>
  );
};

export default AI3;
