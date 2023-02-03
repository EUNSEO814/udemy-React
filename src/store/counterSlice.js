import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// 전역 상태의 createSlice를 미리 만들어둬야함.
const counterSlice = createSlice({
  name: "counter",
  //   initialState: initialState
  // === initialState,
  initialState: initialCounterState,

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
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
