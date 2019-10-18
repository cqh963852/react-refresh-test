import React, { createContext } from "react";
import A from "./A";
import useCounter from "./useCounter";

type CounterContextType = ReturnType<typeof useCounter>;

export const CounterContainer = createContext<CounterContextType | null>(null);

const Container = () => {
  const counter = useCounter();
  return (
    <CounterContainer.Provider value={counter}>
      <A />
    </CounterContainer.Provider>
  );
};

export default Container;
