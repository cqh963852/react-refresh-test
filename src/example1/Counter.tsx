import React from "react";

const Counter = (props: {
  decrease: any;
  increase: any;
  count: number;
  name: string;
}) => {
  const { decrease, increase, count, name } = props;
  console.log("refresh counter", name);
  return (
    <div>
      <button onClick={decrease}>-</button>
      <div>{count}</div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
