import React from "react";
import AA from "./AA";
import AB from "./AB";
import Counter from "./Counter";
import useCounter from "./useCounter";

const A = () => {
  console.log("refresh A");
  const counter = useCounter();
  return (
    <div>
      A:
      <Counter {...counter} name={"A"} />
      <div style={{ display: "flex" }}>
        <AA />
        <AB />
      </div>
    </div>
  );
};

export default A;
