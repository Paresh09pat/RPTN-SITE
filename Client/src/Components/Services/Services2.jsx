import React from "react";
import aiIcon from "../../Images/aiIcon.png";
import cyberIcon from "../../Images/cyberIcon.png";
import nanoTechIcon from "../../Images/nanoTechIcon.png";
import iotIcon from "../../Images/iotIcon.png";
import cloudIcon from "../../Images/cloudIcon.png";
import consultIcon from "../../Images/consultIcon.png";
import "./Services.css"

const Services2 = () => {
  return (
    <>
      {/* second section start */}
      <div className="secound--page main--div--secound">
        <div className="Service__container">
          <div className="header--secound--page">
            {/* <!-- <span className="background--text--E">
                 <img src="./assets/background--e--blue.jpg" alt=""></span> --> */}
            <h2 className="secound--header" data-aos="zoom-in">
              Services We Can <span className="secound--span--big">Help</span>
              You With
            </h2>
          </div>
          <div className="secound--page--p--content">
            <p className="secound--page--p" data-aos="zoom-in">
              Our services includes application of business and technical
              expertise to enable organizations in the creation, management and
              optimization oforaccess to information and business processes.
            </p>
          </div>
          <div className="row">
            <div className="col order-2 order-sm-2 order-xl-2">
              <div className="grid--sec" data-aos="fade-left">
                <div className="p--grid">
                  <h3 className="left--align--header" data-aos="fade-up-right">
                    Cloud Computing
                  </h3>
                  <p className="justify--p">
                    Cloud is the new era of the technology helps to storage and
                    security of information is core to an organization's
                    innovation ecosystem.
                  </p>
                </div>
                <div className="img--grid--right">
                  <img
                    src={cloudIcon}
                    alt="nanotech"
                    className="nano--tech--right"
                    data-aos="flip-up"
                  />
                </div>
              </div>
            </div>
            <div className="col order-1 order-sm-1 order-xl-1">
              <div className="grid--sec" data-aos="fade-right">
                <div className="img--grid--left">
                  <img
                    src={nanoTechIcon}
                    alt="nanotech"
                    className="nano--tech--left"
                    data-aos="flip-up"
                  />
                </div>

                <div className="p--grid">
                  <h3 className="right--align--header" data-aos="fade-up-right">
                    Nanotechnology
                  </h3>
                  <p className="justify--p">
                    Numerous technological advances in both research and
                    industry, contributing to the progress of nano technology
                    research fields as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col order-4 order-sm-4 order-xl-4">
              <div className="grid--sec" data-aos="fade-left">
                <div className="p--grid">
                  <h3 className="left--align--header" data-aos="fade-up-right">
                    Internet OF Things
                  </h3>
                  <p className="justify--p">
                    The use of digital intelligence to respond to actual context
                    in order to unlock exponential value.
                  </p>
                </div>
                <div className="img--grid--right">
                  <img
                    src={iotIcon}
                    alt="nanotech"
                    className="nano--tech--right"
                    data-aos="flip-up"
                  />
                </div>
              </div>
            </div>
            <div className="col order-3 order-sm-3 order-xl-3">
              <div className="grid--sec" data-aos="fade-right">
                <div className="img--grid--left">
                  <img
                    src={aiIcon}
                    alt="nanotech"
                    className="nano--tech--left"
                    data-aos="flip-up"
                  />
                </div>
                <div className="p--grid">
                  <h3 className="right--align--header" data-aos="fade-up-right">
                    Artificial Intelligence
                  </h3>
                  <p className="justify--p">
                    Our comprehensive AI is an enterprise solution enables
                    company to enhance their business strategies to stay in good
                    shape to take advantage of AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col order-6 order-sm-6 order-xl-6">
              <div className="grid--sec" data-aos="fade-left">
                <div className="p--grid">
                  <h3 className="left--align--header" data-aos="fade-up-right">
                    Consulting Services
                  </h3>
                  <p className="justify--p">
                    We take use of our collective experience to strategically
                    apply our industry skills and applicable information.
                  </p>
                </div>
                <div className="img--grid--right">
                  <img
                    src={consultIcon}
                    alt="nanotech"
                    className="nano--tech--right"
                    data-aos="flip-up"
                  />
                </div>
              </div>
            </div>
            <div className="col order-5 order-sm-5 order-lg-5">
              <div className="grid--sec">
                <div className="img--grid--left">
                  <img
                    src={cyberIcon}
                    alt="nanotech"
                    className="nano--tech--left"
                    data-aos="flip-up"
                  />
                </div>
                <div className="p--grid" data-aos="fade-right">
                  <h3 className="right--align--header" data-aos="fade-up-right">
                    Cyber Security
                  </h3>
                  <p className="justify--p">
                    Creating cyber reliable business which secure the assets of
                    organization that are future-proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section end */}
    </>
  );
};

export default Services2;
