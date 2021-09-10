import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";

export default combineReducers(
  Object.assign({
    dashboard: dashboardReducer
  })
);
