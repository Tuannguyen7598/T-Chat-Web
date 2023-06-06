import React from "react";
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import { AppState } from "./appState/AppState";
import { App } from "./App";


declare const SERVER_API_ENDPOINT: string;
const baseURL = SERVER_API_ENDPOINT ?? "http://localhost:3000/";

render(<App baseURL={baseURL} initialState={new AppState()} />,document.getElementById("app"));

/**
 * (1) Required to enable HMR with webpack dev server
 * @see https://github.com/JeffreyWay/laravel-mix/issues/2093
 *
 * (2) You need "npm i -D @types/webpack-env" for typescript typing OR "npm install --save-dev @types/node"
 * @see https://stackoverflow.com/questions/40568176/webpack-typescript-module-hot-does-not-exist
 */
if (process.env.NODE_ENV === "development" && module.hot) {
    // see API https://webpack.js.org/api/hot-module-replacement/
    module.hot.accept();
}
