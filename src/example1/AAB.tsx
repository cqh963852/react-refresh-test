import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const AAB = () => {
  console.log("refresh AAB");
  const counter = useCounter();

  return (
    <div style={{ flexGrow: 1 }}>
      AAB:
      <Counter {...counter} name={"AAB"} />
    </div>
  );
};

export default AAB;
