//this file combines all the reducers and send them to the store
import { combineReducers } from "redux";
import cardItems from "./reducer";
export default combineReducers({
    cardItems,
});