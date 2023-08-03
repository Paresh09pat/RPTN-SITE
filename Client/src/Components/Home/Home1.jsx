import React, { useEffect } from "react";
import "./Home.css";

const Home1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* First Section ends */}
      <div id="FSNC_first_sec_main_div">
        <div className="first_slide_main_Sub_div">
          <h2 className="give_some_border" data-aos="fade-down">
            <p className="rptn_heading">REDPHANTOM TECH NOVELTY</p>
            <p className="rptn_heading_ST">
              We Have Extreamly Effective IT <br /> Solutions For Your Industry
            </p>
          </h2>

          <p
            style={{ textAlign: "justify" }}
            data-aos="fade-up"
            className="first_sec_p"
          >
            Our top goal is to ensure that the requirements of our customers
            remain our top priority at all times throughout the process of
            integrating new features into our current services as we expand our
            service offerings.
          </p>
          <p
            style={{ textAlign: "justify", paddingBottom: "15px" }}
            data-aos="fade-up"
            className="first_sec_p"
          >
            Consequently, we will be in a better position to react to the
            changing requirements of our customers and to provide them with
            better service in the future. Consequently, we consistently exceed
            our client's expectations by exceeding their needs, and we take care
            of any extra problems that occur on their behalf. Every aspect of
            our activity is overseen by a service sector organization, which is
            responsible for all aspects of our work. This organization is in
            charge of putting policies in place, executing programs, X assessing
            results on the field.
          </p>
        </div>
      </div>
      {/* First Section ends */}
    </>
  );
};

export default Home1;
