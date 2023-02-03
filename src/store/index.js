import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlide";

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
