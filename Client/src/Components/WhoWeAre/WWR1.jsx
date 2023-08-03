import React, { useState,useEffect } from "react";
import "./WWR.css";

function WWR1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init()
  }, [])
  return (
<>
<div className="wowe_section-one">
          <div className="texts">
            <div className="wowe_text1" data-aos="fade-left" data-aos-duration="1000">Our Work With Novelty </div>
            <div className="wowe_text2" data-aos="fade-right" data-aos-duration="1000">
              JUST TO ILLUMINATE <br /> THE COMMUNITY
            </div>
            <div className="wowe_text3" data-aos="fade-right" data-aos-duration="1000">
              <p>
                As we look to the future, We can leverage our Intellectual,
                technology, <br />
                human,and financial resourses by exploiting the best the RPTN -
                We can substancially move <br />
                the needle and realise our potential as nation builders in a
                digital world by implementing the best of RPTN.
              </p>
            </div>
            {/* <img src="/assets/img3.png" alt="img" width="460" height="345"> */}
          </div>
          _
          <div className="wowe_arrow_right wowe_fortopsec" >
            <span className="fr" />
            <span className="fr" />
            <span className="fr" />
          </div>
        </div>

</>
  )
}

export default WWR1