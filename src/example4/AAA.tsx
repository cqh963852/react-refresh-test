import React from "react";
import Counter, { ICounterProps } from "./Counter";
const AAA = (props: ICounterProps) => {
  console.log("refresh AAA");

  return (
    <div style={{ flexGrow: 1 }}>
      AAA:
      <Counter {...props} name={"AAA"} />
    </div>
  );
};

export default AAA;
