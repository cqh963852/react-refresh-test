import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const AAB = () => {
  console.log("refresh AAB");
  const counter = useContext(CounterContainer)!;

  return (
    <div style={{ flexGrow: 1 }}>
      AAB:
      <Counter {...counter} name={"AAB"} />
    </div>
  );
};

export default AAB;
