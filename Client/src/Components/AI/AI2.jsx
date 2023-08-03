import React, {useEffect} from "react";
import videoImg from "../../Images/button.png";
import "./AI.css"

const AI2 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* Seconds Section */}
      <div id="maindiv_second">
        <div className="sec_subdiv1">
          <div className="video_div" data-aos="flip-left">
            <img className="video_btn" src={videoImg} />

            <div className="on_video">
              <video
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210810214359/2.mp4"
                type="video/mp4"
                muted
                className="vid"
                loop
              ></video>
            </div>
          </div>

          <div className="sec_subdiv1_text">
            AI facilitates decision-making by making the process faster and
            smarter.
          </div>
        </div>

        <div className="sec_subdiv2 container">
          <p className="text_ML" data-aos="zoom-in-down">
            MACHINE LEARNING
          </p>

          <p className="text_EIYO" data-aos="zoom-in-down">
            <span className="size_inc">E</span>VERYONE
            <span className="size_inc"> I</span>N
            <span className="size_inc"> Y</span>OUR
            <span className="size_inc"> O</span>RGANIZATION <br />
            <span className="size_inc"> C</span>AN
            <span className="size_inc"> M</span>AKE
            <span className="size_inc"> A</span>N
            <span className="size_inc"> I</span>MPACT
            <span className="size_inc"> W</span>ITH
            <span className="size_inc"> A</span>I
          </p>

          <p className="text_MLTO" data-aos="zoom-in-up">
            <span className="text_MLTO_INC">M</span>ACHINE
            <span className="text_MLTO_INC"> L</span>EARNING
            <span className="text_MLTO_INC"> T</span>O
            <span className="text_MLTO_INC"> U</span>NDERSTAND <br />
            <span className="text_MLTO_INC"> B</span>EHAVIORAL
            <span className="text_MLTO_INC"> P</span>ATTERNS
            <span className="text_MLTO_INC"> O</span>F
            <span className="text_MLTO_INC"> D</span>ATA
          </p>

          <p
            style={{ textAlign: "justify" }}
            className="my_text"
            data-aos="zoom-in-up"
          >
            Machine learning includes complex connectivity of data structures
            model training. model integration and architecture. We focus on
            accuracyof the features of end product to meet end users
            requirements by using different machine learning algorithms.
          </p>
        </div>
      </div>
      {/* Seconds section ends */}
    </>
  );
};

export default AI2;
