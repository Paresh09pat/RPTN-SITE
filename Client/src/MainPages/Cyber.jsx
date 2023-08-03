import React, { useEffect } from "react";
import Cyber1 from "../Components/Cyber/Cyber1";
import Cyber2 from "../Components/Cyber/Cyber2";
import Cyber3 from "../Components/Cyber/Cyber3";
import Cyber4 from "../Components/Cyber/Cyber4";
import Cyber5 from "../Components/Cyber/Cyber5";
import Cyber6 from "../Components/Cyber/Cyber6";

const Cyber = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Cyber1 />
      <Cyber2 />
      <Cyber3 />
      <Cyber4 />
      <Cyber5 />
      <Cyber6 />
    </>
  );
};

export default Cyber;
