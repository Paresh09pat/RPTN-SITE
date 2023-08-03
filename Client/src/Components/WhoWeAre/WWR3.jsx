import React, { useState,useEffect } from "react";
import "./WWR.css";


function WWR3() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init()
  }, [])
    return (
        <>
            <div className="wowe_section-three">
                <div className="who_we_head1">
                    <div>
                        <p className="who_we_head1_para">
                            <span className="wowe_p1" data-aos="fade-right" data-aos-duration="1000"> OUR SOCIAL RESPONSIBILITIES</span>
                            <br /> <br />
                            <span className="wowe_p2" data-aos="fade-left" data-aos-duration="1000">
                                CREATING GOOD CHANGE, EXPERIENCING EACH MOMENT , AND INSPIRING
                                EVERYONE TO RISE.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="who_we_col col ">
                    <div className="who_we_row row">
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                    </div>
                    <div className="who_we_row row">
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                        <div className="who_we_column " data-aos="fade-right" data-aos-duration="1000">
                            <h4 className="who_we_column_h4">Turning To An Eco-friendly And Sustainable Society</h4>
                            <br />
                            <p>
                                The RPTN group has extensive expertise as a Sustainability
                                leader, and can assist organisation with fiding methods to
                                minimise waste, save resourses, and decrease their total
                                carbon footprint, allowing them to transition to a more
                                Sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WWR3