import React from "react";
import "./Expertise.css"
import it_design from "../../Images/itDesign.gif";
import data_security from "../../Images/DataSecurity.gif";
import it_mange from "../../Images/itManag.gif";
import itnfra_plan from "../../Images/InfrastructuePlan.gif";
import firewall from "../../Images/fireWallAD.gif";
import Desktopcomputing from "../../Images/DesktopCom.gif";

const Expertise3 = () => {
  return (
    <>
      {/* section third start */}

      <div id="THSEC_third_main_div">
        <p className="THSEC_third_sec_head ">
          <span className="THSEC_head_font_inc">M</span>AKE
          <span className="THSEC_head_font_inc"> Y</span>OUR
          <span className="THSEC_head_font_inc"> L</span>IFE
          <span className="THSEC_head_font_inc"> E</span>ASIER
          <span className="THSEC_head_font_inc"> W</span>ITH
          <span className="THSEC_head_font_inc"> H</span>ELP
          <span className="THSEC_head_font_inc"> F</span>ROM
          <span className="THSEC_head_font_inc"> RPTN</span>
        </p>

        <div id="THSEC_cards_main_div">
          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards card_design1 card_MQ"
          >
            <img className="SECUTITY_IMG" src={it_design} />
            <p className="THSEC_sub_card_heading">IT DESIGN</p>
            <p className="THSEC_sub_card_simtext">
              We provide the solution for all your appication designated
              concerns with assurance of quality.
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards MLOTHSEC card_MQ"
          >
            <img className="SECUTITY_IMG" src={it_mange} />
            <p className="THSEC_sub_card_heading">IT MANAGEMENT </p>
            <p className="THSEC_sub_card_simtext">
              IT management consultants generally help as organization improve
              performance through analyzing existing bainess problems and
              developing plans to solve them.
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards MLOTHSEC card_design2 card_MQ"
          >
            <img className="SECUTITY_IMG" src={data_security} />
            <p className="THSEC_sub_card_heading">DATA SECURITY</p>
            <p className="THSEC_sub_card_simtext">
              We have strategies to ensure the security and pracy of your data
              under cyber security consulting services.
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards card_design2 card_MQ"
          >
            <img className="SECUTITY_IMG" src={itnfra_plan} />
            <p className="THSEC_sub_card_heading">INFRASTRUCTURE PLAN</p>
            <p className="THSEC_sub_card_simtext">
              We assist in devising and comparing infrastructure plans and
              delivery approaches for projects that involve public or private
              mancing, project ravenues and grants and provide support to
              clients in their Impsmentation of those plans.
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards MLOTHSEC card_MQ"
          >
            <img className="SECUTITY_IMG" src={firewall} />
            <p className="THSEC_sub_card_heading">FIREWALL ADVANCEMENT </p>
            <p className="THSEC_sub_card_simtext">
              Network consulting services assurity of stable Firewall Network
              firewall is: responsible for the protection of both the processes
              which are running as wat an sensitive data, it is of the greatest
              importance to corporate security that the frewall be stable.
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            className="THSEC_sub_cards MLOTHSEC card_design1 card_MQ"
          >
            <img className="SECUTITY_IMG" src={Desktopcomputing} />
            <p className="THSEC_sub_card_heading"> DESKTOP COMPUTING </p>
            <p className="THSEC_sub_card_simtext">
              Desktop computing include workstations personal computers and
              network computing devices Our cervices have solution for your
              smooth uperators desktop computing.
            </p>
          </div>
        </div>
      </div>
      {/* section third end */}
    </>
  );
};

export default Expertise3;
