import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const ABB = () => {
  console.log("refresh ABB");
  const counter = useCounter();

  return (
    <div style={{ flexGrow: 1 }}>
      ABB:
      <Counter {...counter} name={"ABB"} />
    </div>
  );
};

export default ABB;
