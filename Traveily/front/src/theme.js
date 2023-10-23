import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E2834",
      light: "#fffff",
      dark: "#303030",
    },
    secondary: {
      main: "#32B7A9",
    },
    background: {
      default: "#ffffff",
    },
  },
});

theme.props = {};

theme.overrides = {
  //   MuiBottomNavigationAction :{
  //     root : {
  //       minWidth: 'none'
  //     }
  //   },
  MuiCardContent: {
    root: {
      padding: 0,
    },
  },
  MuiCardActionArea: {
    focusHighlight: {
      backgroundColor: "transparent",
    },
  },

  MuiCardActions: {
    root: {
      padding: 0,
    },
  },
};
export default theme;
