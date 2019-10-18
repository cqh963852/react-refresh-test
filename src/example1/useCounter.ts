import { useState, useCallback } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  const decrease = useCallback(() => {
    setCount(c => c - 1);
  }, []);
  return {
    count,
    increase,
    decrease
  };
};

export default useCounter;
