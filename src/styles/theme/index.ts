import { extendTheme } from "@chakra-ui/react";
import { customTheme } from "larissa-ui";

import colors from "./colors";
// import components from "./components";
import fonts from "./fonts";
// import styles from "./styles";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// const customTheme = extendTheme({
//   config,
//   components,
//   colors,
//   fonts,
//   styles,
// });

const theme = extendTheme(customTheme, { colors, fonts });

export default theme;
