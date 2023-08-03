import React, { useEffect } from "react";
import Consulting1 from "../Components/Consulting/Consulting1";
import Consulting2 from "../Components/Consulting/Consulting2";
import Consulting3 from "../Components/Consulting/Consulting3";
import Consulting4 from "../Components/Consulting/Consulting4";

const Consulting = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Consulting1 />
      <Consulting2 />
      <Consulting3 />
      <Consulting4 />
    </>
  );
};

export default Consulting;
