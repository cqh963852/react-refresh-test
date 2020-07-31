import { combineReducers } from "@reduxjs/toolkit";
import athings from "./athings";
import bthings from "./bthings";

const rootReducer = combineReducers({
  athings,
  bthings,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
