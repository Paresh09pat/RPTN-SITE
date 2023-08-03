import React, {useEffect} from "react";
import "./AI.css"

const AI4 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* Fourth Section Starts */}

      <div id="maindiv_fourth">
        <div className="fourth_sam_div">
          <div className="fourth_sub_div1">
            <p className="fsd_text1" data-aos="fade-down">
              PREDICTING FUTURE IS MAGIC OF AI
            </p>

            <p className="fsd_text2" data-aos="fade-up">
              <span className="FS_TC">A</span>DD
              <span className="FS_TC"> AI</span>
              <span className="FS_TC"> T</span>O<span className="FS_TC">Y</span>
              OUR
              <span className="FS_TC"> E</span>XISTING <br />
              <span className="FS_TC"> B</span>USINESS
              <span className="FS_TC"> A</span>CTIVITIES
              <span className="FS_TC"> A</span>ND
              <br />
              <span className="FS_TC">E</span>MPOWER
              <span className="FS_TC"> Y</span>OURSELF .
            </p>

            <p className="fsd_text3" data-aos="fade-up">
              To understanding the natural language especially with proprietary
              and small data sets, we use different machine learning techniques
              along with traditional NPL Palgorithms.
            </p>
          </div>

          <div className="fourth_sub_div2">
            <figure>
              {/* <!-- <img className="my_brain" src="./Images/final.png" alt="image"/> --> */}
            </figure>
          </div>
        </div>
      </div>

      {/* Fourth Section  end */}
    </>
  );
};

export default AI4;
