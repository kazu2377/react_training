// src/createStore.js
import {
  // 名前が被ってしまうので別名でimportする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk"; // 追加
import * as reducers from "./reducers";

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      thunk,
      // react-router-reduxのRedux Middleware
      routerMiddleware(history)
    )
  );
}
