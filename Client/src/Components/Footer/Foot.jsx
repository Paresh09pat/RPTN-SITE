import React, { useEffect, useState } from "react";
import "./Foot.css";
import logo_img from "../../Images/tech_logo.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../Loader/Loader"

function Foot() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email", { toastId: "foot" });
    } else if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
    } else {
      setLoading(true); // Step 2: Set loading state to true
      axios
        .post(`http://localhost:3001/subscribe`, { email })
        .then((response) => {
          if (response.status === 200) {
            setEmail("");
            // setShowModal(true);
            toast.success("Successfully subscribed!");
          }
        })
        .catch((error) => {
          if (error && error.response && error.response.status === 400) {
            toast.error("Email already exists");
          } else {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again later.");
          }
        })
        .finally(() => {
          setLoading(false); // Step 4: Set loading state back to false after response
        });
      setEmail("");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <footer
        id="Foot_main_sec_div"
        style={{ position: "sticky", bottom: "0" }}
      >
        <div className="All_logoes_div">
          <NavLink to="/">
            <img className="foot_comp_logo" src={logo_img} />
          </NavLink>
          <span className="lets_get_high">𝓛𝓮𝓽'𝓼 𝓰𝓮𝓽 𝓱𝓲𝓰𝓱</span>
          <p className="follow_us_on">Follow us on</p>
          <a
            href="https://www.facebook.com/redphantomgroup/?ref=pages_you_manage"
            target="_blank"
            className="insta_pic_logo"
          >
            <i className="fa fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/redphantomgroup/"
            target="_blank"
            className="insta_pic_logo"
          >
            <i className="fa fa-instagram"></i>
          </a>

          <a
            href="https://wa.me/+919172912622"
            target="_blank"
            className="insta_pic_logo"
          >
            <i className="fa fa-twitter"></i>
          </a>

          <a
            href="https://twitter.com/redphantomgroup"
            target="_blank"
            className="insta_pic_logo"
          >
            <i className="fa fa-whatsapp"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UC3CbP6ZDRtyvweBc3966lxw"
            target="_blank"
            className="insta_pic_logo"
          >
            <i className="fa fa-youtube"></i>
          </a>
        </div>

        <div className="subscribe_div">
        <form method="post">
          <input
            className="foot_input"
            style={{ marginRight: "10px" }}
            placeholder="Enter E-mail to subscribe . ."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button onClick={subscribe} className="foot_btn">Subscribe</button>

          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Loader />
            </div>
          )}
        </form>

        <ToastContainer
          position="top-right"
          className="toastContainer"
          autoClose={2000}
          style={{ zIndex: 1, top: "10%" }}
          limit={1}
        />

      </div>

      <div className="All_links_main_div">
        <div className="footer_card_div">
          <p className="footer_all_heading">Business</p>
          <a className="anchor_tag" href="">
            Technology
          </a>
          <br />
          <a className="anchor_tag" href="">
            Tranceport
          </a>
          <br />
          <a className="anchor_tag" href="">
            Finance
          </a>
          <br />
          <a className="anchor_tag" href="">
            E-commerce
          </a>
        </div>

        <div className="footer_card_div">
          <p className="footer_all_heading">Community</p>
          <a className="anchor_tag" href="">
            Education
          </a>
          <br />
          <a className="anchor_tag" href="">
            Empowerment
          </a>
          <br />
          <a className="anchor_tag" href="">
            Environment
          </a>
          <br />
          <a className="anchor_tag" href="">
            Health
          </a>
        </div>

        <div className="footer_card_div">
          <p className="footer_all_heading">About</p>
          <a className="anchor_tag" href="">
            Founder
          </a>
          <br />
          <a className="anchor_tag" href="">
            Chairman
          </a>
          <br />
          <a className="anchor_tag" href="">
            Team
          </a>
          <br />
        </div>

        <div className="footer_card_div">
          <p className="footer_all_heading">News</p>
          <a className="anchor_tag" href="">
            Photos
          </a>
          <br />
          <a className="anchor_tag" href="">
            Videos
          </a>
          <br />
          <a className="anchor_tag" href="">
            Downloads
          </a>
          <br />
          <a className="anchor_tag" href="">
            News
          </a>
        </div>
      </div>
    </footer >
      <div className="copy_right">
        2019 - 2024 RedPhantom Industries Private Limited . All Rights Reserved.
      </div>
    </>
  );
}

export default Foot;
