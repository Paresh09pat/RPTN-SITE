import React from "react";
import cloud from "../../Images/isometric-cloud-storage-illustration.svg";
import "./Services.css"

const Services3 = () => {
  return (
    <>
      {/* third section start */}
      <div className="third--page">
        <div className="container">
          <div className="container text-center third--page--content">
            <div className="row">
              <div
                className="col third--page--img--col"
                data-aos="zoom-in-right"
              >
                <span className="background--text--IN">IN</span>
                <img
                  src={cloud}
                  alt="third-page"
                  className="third--page--img"
                />
              </div>

              <div className="col">
                <h2 className="third--page--header" data-aos="fade-down-right">
                  Incredible
                  <span className="third--span--big"> Infrastructure</span>
                </h2>
                <p className="third--page--p" data-aos="zoom-in-left">
                  Maximize the value of your cloud and IT infrastructure by
                  implementing solutions that combine in-depth market knowledge,
                  cutting-edge technology, and top-notch implementation
                  practices. In many of our customer's digital transformations,
                  RPTN's depth and breadth in IPinfrastructure and cloud
                  technologies make us the ideal partner to work with. Investing
                  in proprietary tools and technology, a large partner
                  ecosystem, and experience in new technologies like as software
                  defined things, open source and make us a one-stop shop for
                  all cloud and IT infrastructure requirements. Despite being an
                  automation platform, RPTN's cloud and infrastructure services
                  take ourinformed clients to a newlevelofoperationalefficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section end */}
    </>
  );
};

export default Services3;
