import React, { memo, useContext } from "react";
import AA from "./AA";
import AB from "./AB";
import { CounterContainer } from "./Container";
const A = () => {
  console.log("refresh A");
  const { increase, decrease } = useContext(CounterContainer)!;
  return (
    <div>
      A:
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <div style={{ display: "flex" }}>
        <AA />
        <AB />
      </div>
    </div>
  );
};

export default memo(A);
