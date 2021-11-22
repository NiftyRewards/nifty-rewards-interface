import {
  Center,
  Flex,
  HStack,
  VStack,
  Spacer,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

function playground() {
  const vibrate = () => {
    window.navigator.vibrate([100, 50, 50]);
  };

  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };

  const share = () => {
    window.navigator.share(shareData);
  };

  return (
    <VStack
      bgImage="/colorfulBackground.jpeg"
      h="1200px"
      align="center"
      justify="center"
    >
      <HStack w="full">
        <Center boxSize="100px" bg="twitter.400">
          Hello
        </Center>
        <Button onClick={vibrate}>Vibrate a little</Button>
        <Button onClick={share}>Vibrate a little</Button>
        <Spacer />

        <Center boxSize="100px" bg="twitter.400">
          Hello
        </Center>
        <Center boxSize="100px" bg="twitter.400">
          Hello
        </Center>
      </HStack>
      <Flex w="full">
        <Center boxSize="100px" flex="2" bg="facebook.400">
          Hello
        </Center>
        <Spacer />
        <Box
          p="2px"
          borderRadius="lg"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          boxSize="100px"
        >
          <Box borderRadius="lg" p="0.5rem" boxSize="full" bg="facebook.400">
            Hello
          </Box>
        </Box>
        <Spacer />
        <Center boxSize="100px" bg="facebook.400">
          Hello
        </Center>
      </Flex>
      <Grid gap="10px" gridTemplateColumns="2fr 1fr 1fr">
        {[1, 2, 3, 4, 5].map(() => (
          <GridItem>
            <Center boxSize="100px" bg="facebook.500">
              Hello
            </Center>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}

export default playground;
