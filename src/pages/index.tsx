import { Button, Heading, VStack, Text } from "@chakra-ui/react";
// import AuthComponent from "../components/AuthComponent";
import dynamic from "next/dynamic";
const AuthComponent = dynamic(() => import("../components/AuthComponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <VStack>
      <Heading>Heading</Heading>
      <Text>Text</Text>
      <Button>Button</Button>
      <AuthComponent />
    </VStack>
  );
};

export default Home;
