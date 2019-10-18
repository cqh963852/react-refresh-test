import React from "react";
import Counter from "./Counter";

const ABA = () => {
  console.log("refresh ABA");
  return (
    <div style={{ flexGrow: 1 }}>
      ABA:
      <Counter name={"ABA"} />
    </div>
  );
};

export default ABA;
