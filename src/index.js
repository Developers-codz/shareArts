import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {ThemeProvider} from "./context/theme-context"
import {BrowserRouter} from "react-router-dom"
 
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter><ThemeProvider> <App /></ThemeProvider></BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
