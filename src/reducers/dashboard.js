import createReducer from "../store/createReducer";
import * as types from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
};

const dashboardReducer = createReducer(INITIAL_STATE, {
  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  },

  [types.DASHBOARD_DATA](state, action) {
    return {
      ...state,
      dashBoardData: action.dashBoardData,
    };
  },
});

export default dashboardReducer;
