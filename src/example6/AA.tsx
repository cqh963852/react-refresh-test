import React from "react";
import AAB from "./AAB";
import AAA from "./AAA";
import Counter from "./Counter";

const AA = () => {
  console.log("refresh AA");
  return (
    <div style={{ flexGrow: 1 }}>
      AA
      <Counter name={"AA"} />
      <div style={{ display: "flex" }}>
        <AAA />
        <AAB />
      </div>
    </div>
  );
};

export default AA;
