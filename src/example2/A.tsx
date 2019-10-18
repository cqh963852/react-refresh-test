import React from "react";
import AA from "./AA";
import AB from "./AB";
import Counter from "./Counter";
const A = () => {
  console.log("refresh A");
  return (
    <div>
      A:
      <Counter name={"A"} />
      <div style={{ display: "flex" }}>
        <AA />
        <AB />
      </div>
    </div>
  );
};

export default A;
