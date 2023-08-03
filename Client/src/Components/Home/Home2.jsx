import React from "react";
import "./Home.css";

import sec2 from "../../Images/sec2.png";

const Home2 = () => {
  return (
    <>
      {/* Seconds Section start */}

      <div id="FSNC_second_sec_main_div">
        <div className="W__Back__word">W</div>
        <div className="FSNC_second_sub_div1">
          <img className="sec2_hang_man" src={sec2} />
        </div>
        <div className="FSNC_second_sub_div2">
          <h2 className="SSMAINHTEXT" data-aos="fade-down">
            <p className="FSNC_Headtext">
              <span className="FSNC_HEAD_TI">W</span>E
              <span className="FSNC_HEAD_TI"> A</span>RE
              <span style={{ fontSize: "40px" }}>
                <span className="FSNC_HEAD_TI"> T</span>HINKING
              </span>
              <span className="FSNC_HEAD_TI"> O</span>F
              <span className="FSNC_HEAD_TI"> A</span>
              <span className="FSNC_HEAD_TI"> N</span>EW
            </p>
            <p className="approach">APPROACH TO YOUR CURRENT METHODS</p>
          </h2>
          <p className="FSNC_normaltext" data-aos="fade-left">
            Our top goal is to ensure that the requirements of our customers
            remain our top priority at all times throughout the process of
            integrating new features into our current services as we expand our
            service offerings. <br />
            <br />
            Consequently, we will be in a better position to react to the
            changing requirements of our customers and to provide them with
            better service in the future. Consequently, we consistently exceed
            our client's expectations by exceeding their needs, and we take care
            of any extra problems that occur on their behalf. Every aspect of
            our activity is overseen by a service sector organization, which is
            responsible for all aspects of our work. This organization is in
            charge of putting policies in place, executing programs, and
            assessing results on the field.
          </p>
        </div>
        <img src="" alt="" />
      </div>

      {/* Seconds Section ends */}
    </>
  );
};

export default Home2;
