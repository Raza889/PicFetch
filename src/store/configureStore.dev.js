import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__
    //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //   : (f) => f
  )(createStore);
  const store = finalCreateStore(reducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}