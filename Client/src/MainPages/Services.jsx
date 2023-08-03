import React, { useEffect } from "react";
import Services1 from "../Components/Services/Services1";
import Services2 from "../Components/Services/Services2";
import Services3 from "../Components/Services/Services3";
import Services4 from "../Components/Services/Services4";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main id="main-content">
        <Services1 />
        <Services2 />
        <Services3 />
        <Services4 />
      </main>
    </>
  );
};

export default Services;
