import React from "react";
import Counter from "./Counter";

const AAB = () => {
  console.log("refresh AAB");
  return (
    <div style={{ flexGrow: 1 }}>
      AAB:
      <Counter name={"AAB"} />
    </div>
  );
};

export default AAB;
