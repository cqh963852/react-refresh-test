import React, { useContext } from "react";
import Counter from "./Counter";
import { CounterContainer } from "./Container";

const ABA = () => {
  console.log("refresh ABA");
  const counter = useContext(CounterContainer)!;

  return (
    <div style={{ flexGrow: 1 }}>
      ABA:
      <Counter {...counter} name={"ABA"} />
    </div>
  );
};

export default ABA;
