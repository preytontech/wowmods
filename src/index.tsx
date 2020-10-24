import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./materialThemes/customTheme";

import "fontsource-roboto";
import { CssBaseline } from "@material-ui/core";
const store = configureStore();
ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
