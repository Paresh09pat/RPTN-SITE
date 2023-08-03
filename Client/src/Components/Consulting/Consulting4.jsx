import React from "react";
import icon3 from "../../Images/icon3.png";
import i3 from "../../Images/i3.png";
import i1 from "../../Images/i1.png";
import i2 from "../../Images/i2.png";
import "./Consulting.css";

const Consulting4 = () => {
  return (
    <>
      {/* Section 4 starts */}
      <div className="p4">
        <div className="section41 container">
          <br />
          <br />
          <h2 className="p4_head">HOW CAN YOUR CITY USE IOT TECHNOLOGY?</h2>
          <p className="p4_p">
            the iot includes only smart sensors and other devices.On the
            operational level IoT,
            <br />
            for example wheather data is collected . IoT offers new
            opportunities for citirs to use, <br />
            data to manage traffic,cut pollution , make better use of
            infrastructure and keep <br />
            citizen safe and clean &nbsp;&nbsp;&nbsp;
            <h2 className="p4_head2">LETS BUILD A CREATIVE NATION TOGETHER!</h2>
            <div className="readmore__main">
              <button className="readmore__button">
                <div className="d-flex  align-content-center ">
                  Read More
                  <div className="vis_arrow_right_cons_cons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <img src={icon3} className="img3" />
            </div>
          </p>
          <br />
          <br />
        </div>
        <div className="para41 container">
          <center>
            <h1 className="para41_head">
              HOW CAN YOUR CITY USE IOT TECHNOLOGY?
            </h1>
            <p id="text-para">
              In order for componies IoT stratergy to be comptitive advantage
              relies on having a broad set of <br />
              tools that promot interoperability throughtout the IoT solution
              and among a heterogeneous mix of devices.
            </p>
          </center>
        </div>
        <br />
        <br />
        <div className="b4  align-items-center">
          <center>
            <div
              id="card"
              className="card_sec"
              style={{ display: "flex", gap: "90px" }}
            >
              <div className="sub_card">
                <div className="c41_consult">
                  <center>
                    <div
                      className="img41"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <img src={i3} id="i3" />
                    </div>
                  </center>
                  <center>
                    <h3 className="c41head">AUTOMOTIVE IOT SOLUTION</h3>
                  </center>
                  <p className="sub_text">
                    Digital transformation technologies are sets of technologies
                    includes digital transformation strategies which enable
                    cyber-physical.it also impact on the use of devices in our
                    daily life.
                  </p>
                </div>
              </div>

              <div className="sub_card">
                <div className="c41_consult">
                  <center>
                    <div
                      className="img42"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <img src={i1} id="i3" />
                    </div>
                  </center>
                  <center>
                    <h3 className="c41head">INDUSTRIAL IOT SOLUTION</h3>
                  </center>
                  <p className="sub_text">
                    The foundation of IoT solutions start and ends with security
                    .Since devices may send large amounts of sensitive data and
                    users of IoT applications may also have the ability to
                    directly control a device.
                  </p>
                </div>
              </div>

              <div className="sub_card">
                <div className="c41_consult">
                  <center>
                    <div
                      className="img43"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <img src={i2} id="i3" />
                    </div>
                  </center>
                  <center>
                    <h3 className="c41head">SYSTEM ON CHEAP IOT SOLUTIONS</h3>
                  </center>
                  <p className="sub_text">
                    The data generated from IoT devices turns out to be value of
                    only if it gets subjected to analysis.which brings data
                    analytics into the picture.Data Analytics(DA) is defined as
                    a process
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>

      {/* Section 4 edns */}
    </>
  );
};

export default Consulting4;
