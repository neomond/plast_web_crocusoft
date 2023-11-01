import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1320,
      xl: 1536,
    },
  },
});
