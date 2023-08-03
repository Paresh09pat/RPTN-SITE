import React from "react";
import "./Home.css";
import img1 from "../../Images/img1.png";
import img2 from "../../Images/img2.png";
import img3 from "../../Images/img3.png";
import wpng from "../../Images/w.png";

const Home6 = () => {
  return (
    <>
      {/* Sixth Section Start */}
      <div id="FSNC_sixth_sec_main_div">
        <p className="FSNC_sixth_sec_main_head" data-aos="fade-up">
          THE <span className="make_bold">NEWS</span> FROM OUR
          <span className="make_bold"> BLOCK</span>
        </p>

        <div className="FSNC_sixth_sec_three_card">
          <div
            className="FSNC_sixth_sec_three_card_sub JAURI BR1"
            data-aos="fade-up"
          >
            <img className="three_card_img" src={img1} />
            <p className="one_side_border">
              IT Open New Doors For Employement Creation
            </p>
            <p className="unemp">
              Unemployment creates a slew of issues. It leads to a lot of young
              people going in the wrong direction to combat this Problem of
              unemployment, RedPhantom has generated new job possibilities.
            </p>
          </div>

          <div
            className="FSNC_sixth_sec_three_card_sub JAURI"
            data-aos="fade-up"
          >
            <img className="three_card_img" src={img2} />
            <p className="one_side_border">
              The Nano technology Is The Next Future
            </p>
            <p className="unemp">
              The future of Nanotechnology, there are both bright and gloomy
              areas. On the one hand, technical advancements, great government
              backing, increased private investment, and rising demand for
              smaller devices, to mention a few factors.
            </p>
          </div>

          <div className="FSNC_sixth_sec_three_card_sub BR2" data-aos="fade-up">
            <img className="three_card_img" src={img3} />
            <p className="one_side_border">
              India Has Dire Need Of Expert Cybersecurity Professionals.
            </p>
            <p className="unemp">
              With several recent incidents of data breach, India’s
              cybersecurity journey so far proves this demand but is the country
              ready to meet this demand and is it preparing a cybersecurity
              workforce.
            </p>
          </div>
        </div>

        <div className="Email_readmore">
          <div className="enter_email">
            <input
              placeholder="Enter your Email to Subscribe"
              className="input"
            />
            {/* <!-- <button className="arbtn"> &#8594</button> --> */}
          </div>
          <div className="readmore">
            Read More
            <div className="vis_arrow_right_soltions">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section End */}
    </>
  );
};

export default Home6;
