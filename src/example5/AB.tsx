import React, { useContext } from "react";
import ABA from "./ABA";
import ABB from "./ABB";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const AB = () => {
  console.log("refresh AB");
  const counter = useContext(CounterContainer)!;

  return (
    <div style={{ flexGrow: 1 }}>
      AB:
      <Counter {...counter} name={"AB"} />
      <div style={{ display: "flex" }}>
        <ABA />
        <ABB />
      </div>
    </div>
  );
};

export default AB;
