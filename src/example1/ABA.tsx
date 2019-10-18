import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const ABA = () => {
  console.log("refresh ABA");
  const counter = useCounter();

  return (
    <div style={{ flexGrow: 1 }}>
      ABA:
      <Counter {...counter} name={"ABA"} />
    </div>
  );
};

export default ABA;
