import { useContext } from "react";
import React from "react";
import { CounterContainer } from "./Container";

const Counter = (props: { name: string }) => {
  const { name } = props;
  console.log("refresh counter", name);
  const { count, decrease, increase } = useContext(CounterContainer)!;
  return (
    <div>
      <button onClick={decrease}>-</button>
      <div>{count}</div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
