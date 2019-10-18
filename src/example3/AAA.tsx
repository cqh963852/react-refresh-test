import React, { memo } from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";
const AAA = () => {
  console.log("refresh AAA");
  const counter = useCounter();

  return (
    <div style={{ flexGrow: 1 }}>
      AAA:
      <Counter {...counter} name={"AAA"} />
    </div>
  );
};

export default memo(AAA);
