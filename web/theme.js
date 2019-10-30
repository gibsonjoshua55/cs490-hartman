import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'PT Sans'
    ]
  },
  palette: {
    primary: {
      main: '#D0672D',
      light: '#E38652'
    },
    secondary: {
      main: '#D0B82D',
      light: '#F4DC50'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#231F1F',
    },
    contrastThreshold: 50
  },
});

export default theme;
