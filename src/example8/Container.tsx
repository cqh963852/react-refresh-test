import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import Parent from "./component/Parent";

const store = configureStore({
  reducer: rootReducer,
});

const Container = () => {
  return (
    <Provider store={store}>
      <div>
        <Parent />
      </div>
    </Provider>
  );
};

export default Container;
