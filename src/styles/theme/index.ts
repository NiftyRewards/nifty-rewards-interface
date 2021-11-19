import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import components from "./components";
import fonts from "./fonts";
import styles from "./styles";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  components,
  colors,
  fonts,
  styles,
});

export default customTheme;
