import React from 'react'
import icon2 from "../../Images/icon2.png";
import "./Consulting.css";

const Consulting3 = () => {
  return (
    <>
        
      {/* Secttion 3 Starts */}
      <div className="p3" style={{ background: "white", overflow: "hidden" }}>
        <div className="section31 container">
          <center>
            <div className="b2 row align-items-center">
              <div className="b2_box col">
                <div
                  className="c31"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <center>
                    <h3
                      className="c31head"
                      style={{
                        marginTop: "30px",
                        marginBottom: "15px",
                        paddingTop: "20px",
                      }}
                    >
                      AUTOMOTIVE IOT SOLUTION
                    </h3>
                  </center>
                  <p className="c3_p">
                    Internet of things solutions are playning main role to
                    impact our lives in wondrous and sometimes unexpected ways
                    with only few clicks.users can get information about pump
                    engine work-hours, control air temperature ,or measure
                    physical health indicators.
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="c31"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <center>
                    <h3
                      className="c31head"
                      style={{
                        marginTop: "30px",
                        marginBottom: "15px",
                        paddingTop: "20px",
                      }}
                    >
                      INDUSTRIAL IOT SOLUTIONS
                    </h3>
                  </center>
                  <p className="c3_p">
                    IoT Technology in the digital enterprise portfolio enable
                    smart usage of data. portfolio enable smart usage of data .
                    This paves the way for the digital transformation od
                    industry .the convergence of information Technology and data
                    and industrial devices
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="c31"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <center>
                    <h3
                      className="c31head"
                      style={{
                        marginTop: "30px",
                        marginBottom: "15px",
                        paddingTop: "20px",
                      }}
                    >
                      SYSTEM ON CHIP IOT SOLUTION
                    </h3>
                  </center>
                  <p className="c3_p">
                    A System on chip (SoC) integrated circuit(IC) that
                    integrates all components of a computer or other electronic
                    system into a single chip.SoC's may contain digital,analog
                    ,mixed-signal fuctionsall on single chip substrate.IoT
                    applications can be run using SoC.
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
        <div className="cp3 container">
          <br />
          <br /> <br />
          <h1 className="cp3_head">APP DEVELOPMENT FOR CONNECTED DEVICE</h1>
          <center>
            <p className="cp3_para">
              &nbsp;&nbsp; We combine automated devices into architecture.These
              <br />
              control physical devices as the IoT system grows.
            </p>
          </center>
          <center>
            <p className="cp3_para">
              &nbsp;&nbsp; It includes building a scalable architectures wherein
              the
              <br />
              the communication stack from the end devices to the cloud is the
              made <br />
              asynchronous
            </p>
          </center>
          <img src={icon2} id="icon2" />
        </div>
      </div>
      {/* Secttion 3 Ends */}

    </>
  )
}

export default Consulting3