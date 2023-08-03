import React from "react";
import "./Cloud.css";

const Cloud2 = () => {
  useEffect(() => {
    ScrollReveal().reveal(".h3-heading1", { origin: "right", interval: 200 });
    ScrollReveal().reveal(".header-content-para", {
      origin: "right",
      reset: true,
      interval: 2000,
      delay: 300,
    });
    ScrollReveal().reveal(".box-col1", {
      reset: true,
      interval: 300,
    });
    ScrollReveal().reveal(".cloud-col1", {
      origin: "right",
      reset: true,
      interval: 2000,
    });
    ScrollReveal().reveal(".key-features-para", {
      origin: "right",
      interval: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".cloud-col2", {
      origin: "right",
      reset: true,
      interval: 300,
    });
    ScrollReveal().reveal(".key-row2_col", {
      origin: "bottom",
      reset: true,
      interval: 300,
    });
    ScrollReveal().reveal(".key_features_boxes", {
      reset: true,
      interval: 500,
    });
    AOS.init();
  }, []);
  return (
    <>
      {/* Why choose start */}
      <div className="why-choose">
        <div className="box-row1">
          <h2 className="h2-heading2">
            <span className="first-letter" id="why_choose_first">
              P
            </span>
            roviding fast and secure access to data and services anytime and
            anywhere
          </h2>
          <h3 className="h3-heading1">
            <span className="first-letter" id="why_choose_first">
              W
            </span>
            hy <span className="first-letter">c</span>
            hoose
            <span className="first-letter" id="f_letter_rptn">
              RPTN
            </span>
            <span className="first-letter"> C</span>loud
          </h3>
        </div>

        {/* Box Start */}
        <div className="why-choose-wrapper">
          <div className="fsymbol">E</div>
          <div className="box-row2">
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="box-row2">
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
            <div className="box-col1">
              <h2 className="h2-heading1">
                <span className="first-letter">T</span>RANSMIGRATE
              </h2>
              <p className="p-para2">
                We enable busnesses to rethink their transition strategy so that
                they many implement a model for all apps that has little
                disruption when migrating to public and hybrid cloud
                environments using a factory approch
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section second ends */}
    </>
  );
};

export default Cloud2;
