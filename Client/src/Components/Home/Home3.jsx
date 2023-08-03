import React from "react";
import "./Home.css";
import sec3 from "../../Images/sec3.png";

const Home3 = () => {
  return (
    <>
      {/* third Section starts */}

      <div id="FSNC_third_sec_main_div">
        <h2 className="FSNC_third_sec_main_head">
          STRATEGIC E<span style={{ fontSize: "35px" }}>NGINEERING</span>
        </h2>

        <div className="FSNC_TS_card_main_div1">
          <div className="FSNC_TS_sub_card" data-aos="zoom-in">
            <p className="FSNC_TS_sub_card_head">Web Product Services</p>
            <p className="FSNC_para">
              Our extensive application development services offers the services
              that aid in product creation.
            </p>
          </div>

          <div className="FSNC_TS_sub_card" data-aos="zoom-in">
            <p className="FSNC_TS_sub_card_head"> Quality Augmentation </p>
            <p className="FSNC_para">
              We optimize your existing IT applications, as well as re-architect
              and replatform them to make them easier and more innovative.
            </p>
          </div>

          <div className="FSNC_TS_sub_card" data-aos="zoom-in">
            <p className="FSNC_TS_sub_card_head">
              Demonstration And Support of Prototypes
            </p>
            <p className="FSNC_para">
              We offer profound judgment and assist you in maximizing the value
              of your application through support and retain options.
            </p>
          </div>

          <div className="FSNC_TS_sub_card" data-aos="zoom-in">
            <p className="FSNC_TS_sub_card_head">Testing Services</p>
            <p className="FSNC_para">
              Each stage of the app development process includes functional,
              regression, automated and security testing that is built into the
              process.
            </p>
          </div>
        </div>

        <div className="comdiv_img_text" data-aos="fade-up-right">
          <div className="lightman_img_div">
            <img className="lightman_img" src={sec3} />
          </div>

          <div className="FSNC_TS_card_main_div2">
            <h1 className="productive" style={{ color: "#07abf1" }}>
              Productive Talent Management
            </h1>
            <p className="weutilize" style={{ textAlign: "center" }}>
              We are utilizing the global talent revolution, we are opening new
              digital portals to exploring new possibilities and ideas. We
              retaining our place in the competitive age of the future and
              moving on from there for the future to create sustainable digital
              development for the community.
            </p>

            <div className="FSNC_TS_small_card">
              <p className="FSNC_TS_small_card_sub MLSC">
                Attaining The Top Talent
              </p>
              <p className="FSNC_TS_small_card_sub">Performance Management</p>
              <p className="FSNC_TS_small_card_sub MLSC">Value Based Hiring</p>
              <p className="FSNC_TS_small_card_sub">Succession Planning</p>
            </div>
          </div>
        </div>
      </div>
      {/* third Section end */}
    </>
  );
};

export default Home3;
