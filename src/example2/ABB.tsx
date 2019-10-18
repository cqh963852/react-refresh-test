import React from "react";
import Counter from "./Counter";

const ABB = () => {
  console.log("refresh ABB");
  return (
    <div style={{ flexGrow: 1 }}>
      ABB:
      <Counter name={"ABB"} />
    </div>
  );
};

export default ABB;
