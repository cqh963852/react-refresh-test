import React, { useContext } from "react";
import AA from "./AA";
import AB from "./AB";
import Counter from "./Counter";
import { CounterContainer } from "./Container";
const A = () => {
  console.log("refresh A");
  const counter = useContext(CounterContainer)!;
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
