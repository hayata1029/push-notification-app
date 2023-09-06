import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Notifications } from "react-push-notification";
import ButtonPush from "./components/ButtonPush";

function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <body>
        <ButtonPush />
      </body>
    </div>
  );
}

export default App;
