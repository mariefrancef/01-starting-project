import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); // first approches with JSX
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // second approche with no JSX

/*
React.createElement(
  'div'
  {id: 'content'},
  React.createElement(
    'p',
    null,
    'Hello World'
  )
);
*/
