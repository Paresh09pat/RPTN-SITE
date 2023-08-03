import React, { useState,useEffect } from "react";
import "./WWR.css";
import img1 from "../../Images/whoweImg1.png";


function WWR2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
 <>
  <div className="wowe_section-two">
          <div className="who_we_t1">
            <div>
              <p className="who_we_t1_p">
                <h2 className="wowe_highlight" data-aos="fade-left" data-aos-duration="1000">OUR RESPONSIBILITIES</h2>
                <br />
              </p>
              <h3 data-aos="fade-right" data-aos-duration="1000">
                Our Innovative
                <span className="wowe_highlight1" > Projects Are </span>
                Contributing
                <span className="wowe_highlight1"> To Made Up</span> Digital
                Society.
              </h3>
              <p />
            </div>
          </div>
          <div className="who_we_t2">
            <img className="img0" src={img1} alt="img"  data-aos="zoom-in" data-aos-duration="1000"/>
            <div className="wowe_para" data-aos="zoom-out" data-aos-duration="1000">
              <p>
                Societies now, more than ever look for corporations over look on
                corporations to guide them through times of social development.
                In addition to developing an exponential wealth for
                stackholders, we are ideally positioned to change our role in
                society from one of charitable giving to one of nation building.
                In our work at RPTN we believe in elliminating roadblocks to
                develop and collaborate with others to provide possibilities to
                everyone to enjoy a more prosporous future. Technology may be
                used as tool to do good in world. We place an emphasize on the
                following areas; improving the level of digital skills of our
                constituents, using technology to meet fundamental requirements,
                promoting community vitality and improving staff well being.
              </p>
            </div>
          </div>
        </div>
 
 </>
  )
}

export default WWR2