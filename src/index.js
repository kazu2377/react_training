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
//import createBrowserHistory from "history/createHashHistory"; // 追加

import { setupWorker, rest } from 'msw'


const worker = setupWorker(
  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params
    return res(
      ctx.json({
        id: userId,
        firstName: 'John',
        lastName: 'Maverick',
      }),
    )
  }),
)
worker.start()


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

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }


ReactDOM.render(
  <Provider store={store}>
    {/*
      Linkコンポーネントなどが動作するように
      react-router-domのRｗouterではなく
      react-router-reduxのConnectedRouterを使う
    */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
