import { createStore, combineReducers } from 'redux';

// Define your reducers
const initialState = {
  selectedOption: null,
  // Add any other initial state properties here
};

const selectedOptionReducer = (state = initialState.selectedOption, action) => {
  // Handle actions related to selectedOption
  switch (action.type) {
    case 'SET_SELECTED_OPTION':
      return action.payload;
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  selectedOption: selectedOptionReducer,
  // Add any other reducers here
});

// Create the Redux store
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Define your action creators
export const setSelectedOption = (option) => {
  return {
    type: 'SET_SELECTED_OPTION',
    payload: option,
  };
};

export default store;
