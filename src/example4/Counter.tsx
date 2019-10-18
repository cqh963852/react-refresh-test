import React from "react";

export interface ICounterProps {
  decrease: any;
  increase: any;
  count: number;
}

const Counter = (props: ICounterProps & { name: string }) => {
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
