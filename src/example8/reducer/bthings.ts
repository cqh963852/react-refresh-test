import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface IBthings {
  id: string;
  data: number;
}

export const bthingsAdapter = createEntityAdapter<IBthings>({
  selectId: (bthings) => bthings.id,
  sortComparer: () => 0,
});

const slice = createSlice({
  name: "bthings",
  initialState: bthingsAdapter.getInitialState(),
  reducers: {
    add: bthingsAdapter.addOne,
    remove: bthingsAdapter.removeOne,
    update: bthingsAdapter.updateOne,
  },
});

export default slice.reducer;

export const {
  add: addBthings,
  remove: removeBthings,
  update: updateBthings,
} = slice.actions;

export const bthingsSelector = bthingsAdapter.getSelectors<RootState>(
  (state) => state.bthings
);
