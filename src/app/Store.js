import { applyMiddleware, combineReducers, compose } from "redux";
import counterReducer from "./features/counter/Reducer";
import thunk from "redux-thunk";
import { createStoreHook } from "react-redux";

let rootReducer = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStoreHook(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
