import { createStore, combineReducers } from 'redux';

// Define your reducers
const initialState = {
  selectedOption: null,
  selectedImageType:null,
  selectedOrder:null,
  safeSearch:false
  // Add any other initial state properties here
};

// Define your action creators
export const setSelectedOption = (option) => {
  return {
    type: 'SET_SELECTED_OPTION',
    payload: option,
  };
};

export const setSelectedImageType = (option) => {
  return{
    type:'SET_SELECTED_IMAGE_TYPE',
    payload:option
  };
};


export const setSelectedOrder = (option) => {
  return{
    type:'SET_SELECTED_ORDER',
    payload:option
  }
}

export const setSafeSearch = (option) =>{
  return{
    type:'SET_SAFE_SEARCH',
    payload: option
  }
}

//define your Reducers
const selectedOptionReducer = (state = initialState.selectedOption, action) => {
  // Handle actions related to selectedOption
  switch (action.type) {
    case 'SET_SELECTED_OPTION':
      return action.payload;
    default:
      return state;
  }
};


const selectedImageTypeReducer = (state = initialState.selectedImageType, action) =>{
  switch(action.type){
    case 'SET_SELECTED_IMAGE_TYPE':
        return action.payload;
      default:
        return state;
  }
}

const selectedOrderReducer = (state = initialState.selectedOrder, action) => {
  switch(action.type){
    case 'SET_SELECTED_ORDER':
        return action.payload;
      default:
        return state;

  }
}

const safeSearchReducer = (state = initialState.safeSearch, action) =>{
  switch(action.type){
    case 'SET_SAFE_SEARCH':
      return action.payload
     default:
      return state
  }
}

// Combine all reducers
const rootReducer = combineReducers({
  selectedOption: selectedOptionReducer,
  selectedImageType: selectedImageTypeReducer,
  selectedOrder: selectedOrderReducer,
  safeSearch: safeSearchReducer
  // Add any other reducers here
});

// Create the Redux store
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;
