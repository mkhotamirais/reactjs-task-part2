import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import counterReducer from "./features/counter/Reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
