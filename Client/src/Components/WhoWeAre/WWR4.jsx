import React, { useState,useEffect } from "react";
import "./WWR.css";
import img1 from "../../Images/whoweImg1.png";
import img2 from "../../Images/whoweImg2.png";
import img3 from "../../Images/whoweImg3.png";


function WWR4() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      AOS.init()
    }, [])

    return (
        <>
            <div className="wowe_section-five">
                <div className="last">
                    <p className="last_para" data-aos="fade-down-left" data-aos-duration="1000"> Our Approach</p>
                    <h4 className="last_h4" data-aos="fade-down-right" data-aos-duration="1000">
                        SOCIAL INNOVATION CREATE PROSPROUS SOCIETY
                    </h4>
                    <p />
                </div>
                <div className="container who_we_container">
                    <div className="who_we_row row align-items-start1">
                        <div className="who_we_col col" data-aos="fade-right" data-aos-duration="1000">
                            <img className="img2WhoWe" src={img2} alt="img" data-aos="fade-right" data-aos-duration="1000" />
                        </div>
                        <div className="who_we_col col" data-aos="flip-up" data-aos-duration="1000">
                            <img className="img1WhoWe" src={img1} alt="img" />
                        </div>
                        <div className="who_we_col col" data-aos="fade-left" data-aos-duration="1000">
                            <h5 className="who_we_h5" >
                                INNOVATION IMPACTS ON AGRICULTURE
                            </h5>
                            <p className="attri" >
                                Social innovation includes the social processes of
                                innovation, such as open sourse methods and techniques and
                                also the innovation which have a social purpose.
                            </p>
                        </div>
                    </div>
                    <div className="who_we_row row align-items-center2">
                        <div className=" who_we_col col targetting">
                            <h5 className="who_we_h5" data-aos="fade-right" data-aos-duration="1000">
                                TARGETTING SOCIAL NEEDS IN A BETTER WAY THAN THE EXISTING
                                SOLUTIONS
                            </h5>
                        </div>
                        <div className="who_we_col  col" data-aos="flip-up" data-aos-duration="1000">
                            <img className="img2WhoWe" src={img2} alt="" />
                        </div>
                        <div className="who_we_col  col">
                            <h5 className="who_we_h5">
                                INNOVATION IMPACTS ON AGRICULTURE
                            </h5>
                            <p className="attri" data-aos="fade-left" data-aos-duration="1000">
                                Social innovation includes the social processes of
                                innovation, such as open sourse methods and techniques and
                                also the innovation which have a social purpose.
                            </p>
                        </div>
                    </div>
                    <div className="who_we_row row align-items-end3">
                        <div className="who_we_col col">
                            <p className="paragraph" data-aos="fade-right" data-aos-duration="1000">
                                Social innovation includes the social processess, such as
                                open source methods and techniques , and also the innovation
                                which have social purpose. Transformative social innovation
                                not only introduces new approaches to seemingly intractable
                                problems , but is successfull in changing the social
                                institutions that created the problem in first place.
                            </p>
                        </div>
                        <div className="who_we_col  col" data-aos="flip-up" data-aos-duration="1000">
                            <img className="img3WhoWe" src={img3} alt="img" />
                        </div>
                        <div className="c5 who_we_col col" data-aos="fade-left" data-aos-duration="1000">
                            <h5 className="who_we_h5">
                                INNOVATION IMPACTS ON AGRICULTURE
                            </h5>
                            <p className="attri">
                                Social innovation includes the social processes of
                                innovation, such as open sourse methods and techniques and
                                also the innovation which have a social purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WWR4