import { DeepPartial, Theme } from "@chakra-ui/react";

interface ExtendedColors {
  neutralDarkest: string;
  neutralDarker: string;
  neutralDark: string;
  neutralLightest: string;
  neutralLighter: string;
  neutralLight: string;
  borderDark: string;
  borderLight: string;

  neutralDarkerAlpha: string;
  neutralLighterAlpha: string;

  // Functional
  success: string;
  error: string;

  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentDark: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentLight: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["current" | "purple"]>
> &
  ExtendedColors = {
  // Basic
  neutralDarkest: "#1E2328",
  neutralDarker: "#2A2E34",
  neutralDark: "#3B3F46",
  neutralLightest: "#fff",
  neutralLighter: "#f0f0f0",
  neutralLight: "#d4d4d4",

  neutralDarkerAlpha: "#1a2227b3",
  neutralLighterAlpha: "#f0f0f0b3",

  borderDark: "#30363d",
  borderLight: "#c7d2da",

  // Functional
  success: "#00d897",
  error: "#f1356e",

  // Main
  primary: {
    "50": "#FFF8E6",
    "100": "#FFECB8",
    "200": "#FEE08A",
    "300": "#FED35D",
    "400": "#FEC72F",
    "500": "#FEBB01",
    "600": "#CB9501",
    "700": "#987001",
    "800": "#654B01",
    "900": "#332500",
  },
  accentDark: {
    "50": "#FDF7E7",
    "100": "#FAE9BC",
    "200": "#F7DB91",
    "300": "#F4CD66",
    "400": "#F1BF3C",
    "500": "#EEB111",
    "600": "#BF8D0D",
    "700": "#8F6A0A",
    "800": "#5F4707",
    "900": "#302303",
  },
  accentLight: {
    "50": "#E9FBF3",
    "100": "#C3F4DD",
    "200": "#9CEDC7",
    "300": "#75E5B1",
    "400": "#4FDE9B",
    "500": "#28D785",
    "600": "#20AC6B",
    "700": "#188150",
    "800": "#105635",
    "900": "#082B1B",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
