import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'PT Sans',
    ].join(','),
    h1: {
      fontFamily: [
        'Cinzel',
      ]
    },
    h6: {
      fontFamily: [
        'PT Serif',
      ]
    },
    h5: {
      //fontWeight: "fontWeightBold",
      fontFamily: [
        'PT Serif',
      ]
    },
    h4: {
      fontFamily: [
        'PT Serif',
      ],
      color: '#E38652',
      margin: 10,
    },
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
