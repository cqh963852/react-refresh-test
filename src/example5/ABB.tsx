import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const ABB = () => {
  console.log("refresh ABB");
  const counter = useContext(CounterContainer)!;

  return (
    <div style={{ flexGrow: 1 }}>
      ABB:
      <Counter {...counter} name={"ABB"} />
    </div>
  );
};

export default ABB;
