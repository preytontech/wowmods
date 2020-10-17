import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./materialThemes/customTheme";

import "fontsource-roboto";
import { CssBaseline } from "@material-ui/core";
import TopAppBar from "./layout/TopAppBar";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <TopAppBar />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("ApplicationBar")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
