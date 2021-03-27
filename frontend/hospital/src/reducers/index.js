import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";

const initialState = {};

export default combineReducers({
  alert,
  auth,
});
