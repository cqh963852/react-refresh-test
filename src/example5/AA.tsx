import React, { useContext } from "react";
import AAB from "./AAB";
import AAA from "./AAA";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const AA = () => {
  console.log("refresh AA");
  const counter = useContext(CounterContainer)!;

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

export default AA;
