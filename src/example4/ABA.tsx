import React from "react";
import Counter, { ICounterProps } from "./Counter";

const ABA = (props: ICounterProps) => {
  console.log("refresh ABA");

  return (
    <div style={{ flexGrow: 1 }}>
      ABA:
      <Counter {...props} name={"ABA"} />
    </div>
  );
};

export default ABA;
