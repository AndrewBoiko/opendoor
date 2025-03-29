import { createTheme } from '@mui/material/styles';
import '@fontsource/open-sans';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize the primary color
    },
    secondary: {
      main: '#5d9c7b', // Customize the secondary color
    },
    background: {
      default: '#f0f0f0', // Customize the default background color
    },
    text: {
      primary: '#333', // Customize the primary text color
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
          textTransform: 'none', // Disable uppercase text
          color: '#000000', // Customize button text color
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#ffffff', // Customize AppBar background color
    //       color: '#000000', // Customize AppBar text color
    //     },
    //   },
    // },
  },
});

export default theme;
