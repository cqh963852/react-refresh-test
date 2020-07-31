import { createSlice, createEntityAdapter, EntityId } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface IAthing {
  id: EntityId;
  data: number;
  children: string[];
}

export const athingsAdapter = createEntityAdapter<IAthing>({
  selectId: (athing) => athing.id,
  sortComparer: () => 0,
});

const slice = createSlice({
  name: "athings",
  initialState: athingsAdapter.getInitialState(),
  reducers: {
    add: athingsAdapter.addOne,
    remove: athingsAdapter.removeOne,
    update: athingsAdapter.updateOne,
  },
});

export default slice.reducer;

export const {
  add: addAthings,
  remove: removeAthings,
  update: updateAthings,
} = slice.actions;

export const athingsSelector = athingsAdapter.getSelectors<RootState>(
  (state) => state.athings
);
