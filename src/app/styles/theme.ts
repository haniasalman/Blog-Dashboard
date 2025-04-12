import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFDB58', 
      contrastText: '#000', 
    },
    secondary: {
      main: '#000', 
      contrastText: '#FFF', 
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
  },
});

export default theme;