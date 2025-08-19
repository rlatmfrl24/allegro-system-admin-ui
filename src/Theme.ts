import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    signature: Palette["primary"];
  }
  interface PaletteOptions {
    signature: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3D77",
    },
    secondary: {
      main: "#000000",
    },
    signature: {
      dark: "#2C2A56",
      light: "#807EBD",
      main: "#4A4891",
    },
  },
});
