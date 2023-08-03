import React from "react";
import cloudImage from "../../Images/cloud2.png";
import "./Cloud.css"

const Cloud3 = () => {
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
      {/* Third section starts */}
      <div className="cloud-service">
        <div className="cloud-row">
          <div className="cloud-col1">
            <img src={cloudImage} alt="cloud-image" className="cloud-image" />
          </div>
          <div className="cloud-col2">
            <div className="cloud-col2-head">
              <h4 className="cloud-h4">MAXIMIZE YOUR PERFORMANCE</h4>
              <div className="cloud_col2_head1">
                <h2 className="cloud-h2">
                  <span className="cloud-f-letter"> F</span>OR
                  <span className="cloud-f-letter"> Y</span>OUR
                  <span className="cloud-f-letter"> V</span>ERY
                  <span className="cloud-f-letter"> S</span>PECIFIC
                  <span className="cloud-f-letter"> I</span>NDUSTRY,
                  <span className="cloud-f-letter"> W</span>E
                </h2>
              </div>

              <div className="cloud-col2-head2">
                <h2>
                  HAVE HIGHLY-TAILORED
                  <span className="cloud-span">
                    <span className="cloud-span-letter"> C</span>LOUD
                    <span className="cloud-span-letter"> S</span>ERVICES
                  </span>
                </h2>
              </div>

              <p className="cloud-p">
                Many of the storage solutions we provide are available in a
                range of sizes and are available at competitve prices,beacuse of
                the excellent support and flexible features available for
                busineses such as startups banking,medical practices.you can
                take advantage of a sophisticated user interface that includes
                additional data protection measures while still maintaining and
                protecting your privacy and personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third section ends */}
    </>
  );
};

export default Cloud3;
