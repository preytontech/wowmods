import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./materialThemes/customTheme";

import "fontsource-roboto";
import { CssBaseline } from "@material-ui/core";
const store = configureStore();

//here we will cache parts of state as it changes
store.subscribe(() => {
  console.log(store.getState());
});
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
