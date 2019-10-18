import React, { memo } from "react";
import AAB from "./AAB";
import AAA from "./AAA";
import Counter from "./Counter";
import useCounter from "./useCounter";
const AA = () => {
  console.log("refresh AA");
  const counter = useCounter();

  return (
    <div style={{ flexGrow: 1 }}>
      AA
      <Counter {...counter} name={"AA"} />
      <div style={{ display: "flex" }}>
        <AAA />
        <AAB />
      </div>
    </div>
  );
};

export default memo(AA);
