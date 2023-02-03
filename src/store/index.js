// import { legacy_createStore as createStore, combineReducers } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// 전역 상태의 createSlice를 미리 만들어둬야함.
const counterSlice = createSlice({
  name: "counter",
  // initialState: initialState
  // ===
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  //   reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
