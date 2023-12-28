import { createStore } from 'redux';

// Action type
const INCREMENT = 'INCREMENT';

// Action creator
export const increment = () => ({ type: INCREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
