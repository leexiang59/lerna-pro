/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-05 15:41:59
 * @LastEditors: will
 * @LastEditTime: 2020-09-06 15:58:02
 */
import React from "react";
import logo from "./logo.svg";
import { setCookie, getCookie, clearCookie } from "w-helpers";
import "./App.css";

function App() {
  setCookie("name", "will");
  console.log(getCookie("name"));
  return (
    <div className="App">
      <button
        onClick={() => {
          clearCookie("name");
        }}
      >
        清除cookie
      </button>
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
