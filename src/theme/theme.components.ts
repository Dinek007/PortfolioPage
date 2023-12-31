import { Components, Palette } from "@mui/material/styles";
import PoppinsMedium from "../fonts/Poppins-Light.ttf"
import Sunset from '../fonts/Sunset.ttf'



export const getComponents = (palette: Palette): Components =>
  ({
    MuiCssBaseline: {
      styleOverrides: `
    body {
      overflow: auto;
      background-color: black;
    }

    @font-face {
      font-family: Poppins;
      src: url(${PoppinsMedium}) format("truetype");
      font-weight: normal;
    }

    @font-face {
      font-family: Sunset;
      src: url(${Sunset}) format("truetype");
      font-weight: normal;
    }
    `,
    },

    MuiButton: {
      defaultProps: {
        variant: "text",
      },
      styleOverrides: {
        root: {
          padding: "8px 16px",
          textTransform: "none",
          borderRadius: "7px",
          boxShadow: "none",
          color: palette.text.secondary
        },
        containedSecondary: {
          ":disabled": {
            color: palette.text.secondary,
          },
        },
        sizeSmall: {
          fontSize: "14px",
        },
        sizeMedium: {
          fontSize: "16px",
        },
        sizeLarge: {
          fontSize: "20px",
        },
        text: {
          color: palette.text.secondary,
        },
      },
    },
  } as Components);
