import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    eventsReducer,
    filterReducer,
    userReducer
})

export default rootReducer;