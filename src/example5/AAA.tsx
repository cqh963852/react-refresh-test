import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const AAA = () => {
  console.log("refresh AAA");
  const counter = useContext(CounterContainer)!;

  return (
    <div style={{ flexGrow: 1 }}>
      AAA:
      <Counter {...counter} name={"AAA"} />
    </div>
  );
};

export default AAA;
