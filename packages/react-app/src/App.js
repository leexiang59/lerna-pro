/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-05 15:41:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-19 15:54:07
 */
import React from "react";
import logo from "./logo.svg";
import { clearCookie } from "w-helpers";
import { Input } from "antd";
import { WUpload } from "w-components-react";
// import "w-components-react/lib/index.css";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input />
      <WUpload />
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
