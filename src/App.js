// src/App.js
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav";
import Reboot from "material-ui/Reboot"; // 追加
import AppBar from "material-ui/AppBar"; // 追加
import Toolbar from "material-ui/Toolbar"; // 追加
import Typography from "material-ui/Typography"; // 追加

import Login from "./components/Login"; // 追加 3/16

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingLeft: 240 }}>
        {" "}
        {/* styleを追加 */}
        {/* Rebootを追加 */}
        <Reboot />
        {/* ページタイトルを追加 */}
        <AppBar style={{ left: 240 }}>
          {" "}
          {/* styleを追加 */}
          <Toolbar>
            <Typography type="title" color="inherit">
              Yahoo!ショッピングランキング
            </Typography>
          </Toolbar>
        </AppBar>
        <Nav />
        {/* div要素を追加してstyleを指定 */}
        <div style={{ marginTop: 64, padding: 32 }}>
          <Switch>
            <Route path="/" component={Login} />

            <Route path="/all" component={Ranking} />
            <Route path="/category/1" render={() => <Redirect to="/all" />} />
            <Route
              path="/category/:id"
              render={({ match }) => <Ranking categoryId={match.params.id} />}
            />
          </Switch>

          <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">ボタン</button>

          <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div class="text-xl font-medium text-black">ChitChat</div>
              <p class="text-gray-500">You have a new message!</p>
            </div>
          </div>

          <button class="bg-red-500 hover:bg-red-700 animate-bounce w-6 h-6">
            Hover me
          </button>

          <button class="bg-red-500 hover:bg-red-700">
            Processing
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              ●
            </svg>
            Processing
          </button>

          <div class="bg-white dark:bg-gray-800">
            <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
            <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
          </div>

          <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0"></div>
            <div>
              <div class="text-xl font-medium text-black">ChitChat</div>
              <p class="text-gray-500">You have a new message!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
