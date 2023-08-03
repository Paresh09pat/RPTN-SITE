import React, {useEffect} from "react";
import AI1 from "../Components/AI/AI1";
import AI2 from "../Components/AI/AI2";
import AI3 from "../Components/AI/AI3";
import AI4 from "../Components/AI/AI4";

const AI = () => {
    useEffect(() => {
        AOS.init();
      });
    
  return (
    <>
      <AI1 />
      <AI2 />
      <AI3 />
      <AI4 />
    </>
  );
};

export default AI;
