import React from "react";
import Counter from "./Counter";

const AAA = () => {
  console.log("refresh AAA");
  return (
    <div style={{ flexGrow: 1 }}>
      AAA:
      <Counter name={"AAA"} />
    </div>
  );
};

export default AAA;
