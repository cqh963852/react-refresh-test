import { useState, useCallback } from "react";
import React from "react";

const Counter = (props: { name: string }) => {
  const { name } = props;
  console.log("refresh counter", name);
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  const decrease = useCallback(() => {
    setCount(c => c - 1);
  }, []);
  return (
    <div>
      <button onClick={decrease}>-</button>
      <div>{count}</div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
