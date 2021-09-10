import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";
export default function configureStore(initialState) {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
  return finalCreateStore(reducer, initialState);
}