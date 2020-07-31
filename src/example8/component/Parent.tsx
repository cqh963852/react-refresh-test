import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { athingsSelector, addAthings } from "../reducer/athings";
import { addBthings } from "../reducer/bthings";
import AComponent from "./AComponent";
import { RootState } from "../reducer";
import uniqid from "uniqid";
const Parent = () => {
  const athingsIds = useSelector((state: RootState) =>
    athingsSelector.selectIds(state)
  );
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    const bid = uniqid("b_test");
    dispatch(
      addBthings({
        id: bid,
        data: 0,
      })
    );

    dispatch(
      addAthings({
        id: uniqid("a_test"),
        data: 0,
        children: [bid],
      })
    );
  }, [dispatch]);
  return (
    <div>
      {athingsIds.map((id, key) => (
        <AComponent id={id} key={key} />
      ))}
      <button onClick={onClick}>add things</button>
    </div>
  );
};

export default Parent;
