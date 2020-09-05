/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-05 15:41:59
 * @LastEditors: will
 * @LastEditTime: 2020-09-05 16:36:06
 */
import React from "react";
import logo from "./logo.svg";
import { getCookie } from "w-helpers";
import "./App.css";

function App() {
  console.log("w-helpers", getCookie());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
