import React from "react";
import ABA from "./ABA";
import ABB from "./ABB";

const AB = () => {
  console.log("refresh AB");
  return (
    <div style={{ flexGrow: 1 }}>
      AB:
      <div style={{ display: "flex" }}>
        <ABA />
        <ABB />
      </div>
    </div>
  );
};

export default AB;
