import { useColorModeValue } from "@chakra-ui/react";

function useColors() {
  // const value = useColorModeValue(lightModeValue, darkModeValue)

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return { bg, color };
}

export default useColors;
