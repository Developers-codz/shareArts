import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import { makeServer } from "server";
import { ThemeProvider } from "context/theme-context";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import store  from "app/store"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
