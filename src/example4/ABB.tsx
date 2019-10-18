import React from "react";
import Counter, { ICounterProps } from "./Counter";

const ABB = (props: ICounterProps) => {
  console.log("refresh ABB");

  return (
    <div style={{ flexGrow: 1 }}>
      ABB:
      <Counter {...props} name={"ABB"} />
    </div>
  );
};

export default ABB;
