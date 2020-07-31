import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bthingsSelector, updateBthings } from "../reducer/bthings";
import { RootState } from "../reducer";

interface IProps {
  id: string;
}

const BComponent = (props: IProps) => {
  const { id } = props;
  const bthing = useSelector((state: RootState) =>
    bthingsSelector.selectById(state, id)
  );
  const dispatch = useDispatch();
  console.log("BComponent update", id);
  const onClick = useCallback(() => {
    dispatch(
      updateBthings({
        id: id,
        changes: {
          data: 10,
        },
      })
    );
  }, [dispatch, id]);
  return (
    <div>
      {bthing?.id}:{bthing?.data}
      <button onClick={onClick}>update b</button>
    </div>
  );
};

export default BComponent;
