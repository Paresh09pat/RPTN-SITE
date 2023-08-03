import React from "react";
import "./Cloud.css"


const Cloud1 = () => {
    useEffect(() => {
        ScrollReveal().reveal(".h3-heading1", { origin: "right", interval: 200 });
        ScrollReveal().reveal(".header-content-para", {
          origin: "right",
          reset: true,
          interval: 2000,
          delay: 300,
        });
        ScrollReveal().reveal(".box-col1", {
          reset: true,
          interval: 300,
        });
        ScrollReveal().reveal(".cloud-col1", {
          origin: "right",
          reset: true,
          interval: 2000,
        });
        ScrollReveal().reveal(".key-features-para", {
          origin: "right",
          interval: 2000,
          delay: 200,
        });
        ScrollReveal().reveal(".cloud-col2", {
          origin: "right",
          reset: true,
          interval: 300,
        });
        ScrollReveal().reveal(".key-row2_col", {
          origin: "bottom",
          reset: true,
          interval: 300,
        });
        ScrollReveal().reveal(".key_features_boxes", {
          reset: true,
          interval: 500,
        });
        AOS.init();
      }, []);
  return (
    <>
      {/* First section starts */}
      <div className="container1">
        <div className="main-header">
          <div className="header-row">
            <div className="main-header-heading">
              <h2 className="h2-heading">
                <span className="first-letter">W</span>e
                <span className="first-letter"> H</span>ave
                <span className="first-letter"> E</span>xtremly
                <span className="first-letter"> E</span>ffective
                <span className="first-letter"> I</span>T <br />
                <span className="first-letter"> S</span>olutions
                <span className="first-letter"> F</span>or
                <span className="first-letter"> Y</span>our
                <span className="first-letter"> I</span>ndustry
              </h2>
            </div>
            <div className="header-content-para">
              <p className="p-para">
                Our top goal is to ensure that the requirements of our customers
                remain our top priority at all times throughout the process of
                integrating new features into our current services as we expand
                our service offerings
              </p>
              <p className="p-para">
                Consequently, we will be in a better position to react to the
                changing requirements of our customers and to provide them with
                better service in the future. Consequently, we consistently
                exceed our client's expectations by exceeding their needs, and
                we take care of any extra problems that occur on their behalf.
                Every aspect of our activity is overseen by a service sector
                organization, which is responsible for all aspects of our work.
                This organization is in charge of putting policies in place,
                executing programs, and assessing results on the field.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* First section ends */}
    </>
  );
};

export default Cloud1;
