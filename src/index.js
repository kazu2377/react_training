import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoList from "./TodoList";
import reportWebVitals from "./reportWebVitals";
import { ConnectedRouter } from "react-router-redux"; // 追加
import createStore from "./createStore"; // 追加
import { Provider } from "react-redux"; // 追加
import createBrowserHistory from "history/createBrowserHistory"; // 追加

// import { createStore, combineReducers, applyMiddleware } from "redux"; // 追加
// import logger from "redux-logger"; // 追加

// import * as reducers from "./reducers"; // 追加

const Hello = (props) => {
  return <div>{props.name}</div>;
};

const Test = (props) => {
  return <div>{console.log({ ...props })}</div>;
};

const tasks = [
  { title: "odo1", id: 0 },
  { title: "todo2", id: 1 },
];
const profile = {
  name: "shimizu",
  birthDay: "1978/0613",
};

// historyのインスタンスを生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    {/*
      Linkコンポーネントなどが動作するように
      react-router-domのRouterではなく
      react-router-reduxのConnectedRouterを使う
    */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
