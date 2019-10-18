import React from "react";
import ABA from "./ABA";
import ABB from "./ABB";
import Counter, { ICounterProps } from "./Counter";

const AB = (props: ICounterProps) => {
  console.log("refresh AB");

  return (
    <div style={{ flexGrow: 1 }}>
      AB:
      <Counter {...props} name={"AB"} />
      <div style={{ display: "flex" }}>
        <ABA {...props} />
        <ABB {...props} />
      </div>
    </div>
  );
};

export default AB;
