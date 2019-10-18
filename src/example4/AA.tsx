import React from "react";
import AAB from "./AAB";
import AAA from "./AAA";
import Counter, { ICounterProps } from "./Counter";
const AA = (props: ICounterProps) => {
  console.log("refresh AA");

  return (
    <div style={{ flexGrow: 1 }}>
      AA
      <Counter {...props} name={"AA"} />
      <div style={{ display: "flex" }}>
        <AAA {...props} />
        <AAB {...props} />
      </div>
    </div>
  );
};

export default AA;
