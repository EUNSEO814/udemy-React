import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// 전역 상태의 createSlice를 미리 만들어둬야함.

const counterReducer = (state = initialState, action) => {
  // 원본 state 직접 변경 절대금지!! - 예측 불가능한 동작이 발생할 수도 있고, 프로그램 디버깅하는 것도 어려워질 수 있음.
  // if (action.type === "increment") {
  //     state.counter++;
  //     return {
  //       counter: state.counter ,
  //       showCounter: state.showCounter,
  //     };
  //   }

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;
