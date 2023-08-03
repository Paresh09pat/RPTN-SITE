import React, { useEffect } from "react";
import Expertise1 from "../Components/Expertise/Expertise1";
import Expertise2 from "../Components/Expertise/Expertise2";
import Expertise3 from "../Components/Expertise/Expertise3";
import Expertise4 from "../Components/Expertise/Expertise4";
import Expertise5 from "../Components/Expertise/Expertise5";

const Expertise = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Expertise1 />
      <Expertise2 />
      <Expertise3 />
      <Expertise4 />
      <Expertise5 />
    </>
  );
};

export default Expertise;
