import { combineReducers } from "redux";
import selectOrientationReducer from "./selectOrientationReducer";

const AllReducers = combineReducers({
    selectedOption: selectOrientationReducer
})
export default AllReducers;