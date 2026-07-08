import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EDE4CD',
      light: '#F5EFE0',
      dark: '#C9BB98',
      contrastText: '#4C6C87',
    },
    secondary: {
      main: '#4C6C87',
      light: '#6B8CA6',
      dark: '#3A5470',
      contrastText: '#EDE4CD',
    },
    accent: {
      main: '#D89B3C',
      light: '#E8AC55',
      contrastText: '#4C6C87',
    },
    background: {
      default: '#4C6C87',
      paper: '#3A5470',
    },
    text: {
      primary: '#EDE4CD',
      secondary: '#F5F0E4',
      disabled: '#8FA7BC',
    },
    divider: '#C9BB98',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    allVariants: {
      letterSpacing: '0.04em',
    },
    h1: {
      fontSize: 'clamp(2.75rem, 7vw, 7.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.375rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          minHeight: 48,
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'none',
          padding: '0 20px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 32,
          borderRadius: 50,
          fontSize: '0.875rem',
          fontWeight: 600,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
        },
      },
    },
  },
});

export default theme;
