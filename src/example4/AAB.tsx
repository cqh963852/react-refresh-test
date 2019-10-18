import React from "react";
import Counter, { ICounterProps } from "./Counter";

const AAB = (props: ICounterProps) => {
  console.log("refresh AAB");

  return (
    <div style={{ flexGrow: 1 }}>
      AAB:
      <Counter {...props} name={"AAB"} />
    </div>
  );
};

export default AAB;
