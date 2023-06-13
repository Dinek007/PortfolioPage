import { ReactNode } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { getPalette } from "./theme.palette";
import { getTypography } from "./theme.typography";
import { getComponents } from "./theme.components";

import type {} from "@mui/x-date-pickers/themeAugmentation";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    borderGrey: Palette["primary"];
  }
  interface PaletteOptions {
    borderGrey: PaletteOptions["primary"];
  }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {




  const palette = getPalette();
  const typography = getTypography(palette);
  const components = getComponents(palette) as any;

  const theme = responsiveFontSizes(
    createTheme({
      palette,
      components,
      typography,
      breakpoints: {
        values: {
          xs: 400,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xxl: 2150,
        },
      },
    } as any)
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
