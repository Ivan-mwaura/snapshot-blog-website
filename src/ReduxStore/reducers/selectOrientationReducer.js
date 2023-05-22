const initialstate = {
  selectedOption: null,
};

const selectOrientationReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    default:
      return state;
  }
};

export default selectOrientationReducer;
