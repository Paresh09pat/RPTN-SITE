import React from "react";
import "./Home.css";
import sec5 from "../../Images/sec5.png";
import foundation from "../../Images/foundation.png";
import approach from "../../Images/approach.png";
import cloudSecurity from "../../Images/cloudSecurity.png";

const Home5 = () => {
  return (
    <>
      {/* Fifth Section start */}

      <div id="FSNC_fifth_sec_main_div">
        <div className="FSNC_fifth_sec_head_section" data-aos="zoom-in">
          <h2 className="FSNC_fifth_sec_heading">OUR SOLUTION!</h2>
          <p className="FSNC_fifth_sec_head_ST">
            At RedPhantom Tech Novelty, we believe that enabling everyone to
            emerge is
            <br />
            to become a better version of themselves every day.
          </p>
        </div>

        <div className="card_img_adjust">
          <div className="flip_card_main_div">
            <div className="card cardml" data-aos="zoom-out-right">
              <div
                className="card-front"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <img className="card_front_img" src={approach} alt="" />
                <h2 style={{ color: "white" }}>Aprroach</h2>
              </div>
              <div
                className="card-back"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <p style={{ color: "white" }}>Additional Text</p>
              </div>
            </div>

            <div className="card" data-aos="zoom-out-left">
              <div
                className="card-front "
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={foundation} alt="" className="card_front_img" />
                <h2 style={{ color: "white" }}>Foundation</h2>
              </div>
              <div
                className="card-back"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <p style={{ color: "white" }}>Additional Text</p>
              </div>
            </div>

            <div className="card cardml cardpb" data-aos="zoom-out-right">
              <div
                className="card-front"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={cloudSecurity} alt="" className="card_front_img" />
                <h2 style={{ color: "white" }}>Cloud Security</h2>
              </div>
              <div
                className="card-back "
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <p style={{ color: "white" }}>Additional Text</p>
              </div>
            </div>

            <div className="card cardpb" data-aos="zoom-out-left">
              <div
                className="card-front"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <h1>hover</h1>
              </div>
              <div
                className="card-back"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <p style={{ color: "white" }}>Additional Text</p>
              </div>
            </div>
          </div>

          <div className="add_lap_key_img">
            <img className="man_laptop" src={sec5} />
          </div>
        </div>
      </div>

      {/* Fifth Section end */}
    </>
  );
};

export default Home5;
