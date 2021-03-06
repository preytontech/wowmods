import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#424242",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#24a1a8",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#3b85f5",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ff7e00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
export default customTheme;
