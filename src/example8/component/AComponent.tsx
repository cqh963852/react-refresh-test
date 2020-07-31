import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAthings, athingsSelector } from "../reducer/athings";
import { RootState } from "../reducer";
import BComponent from "./BComponent";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const AComponent = (props: IProps) => {
  const { id } = props;

  const athing = useSelector((state: RootState) =>
    athingsSelector.selectById(state, id)
  );
  const dispatch = useDispatch();

  console.log("AComponent update", id);
  const onClick = useCallback(() => {
    dispatch(
      updateAthings({
        id: id,
        changes: {
          data: 10,
        },
      })
    );
  }, [dispatch, id]);
  return (
    <div>
      {athing?.id}:{athing?.data}
      <button onClick={onClick}>update a</button>
      {athing?.children.map((child) => (
        <BComponent id={child} key={child} />
      ))}
    </div>
  );
};

export default AComponent;
