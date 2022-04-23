import { Button, Heading, Text } from "@chakra-ui/react";
import router from "next/router";

const SignMessageView = ({ connector }) => {
  const signTypedMessage = () => {
    // Draft Message Parameters
    const typedData = {
      types: {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
        ],
        BindingRequest: [
          { name: "address_w3a", type: "address" },
          { name: "address_b", type: "address" },
        ],
      },
      primaryType: "BindingRequest",
      domain: {
        name: "Example Dapp",
        version: "1.0",
        chainId: 1,
        verifyingContract: "0x0000000000000000000000000000000000000000",
      },
      message: {
        address_w3a: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        address_b: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb",
      },
    };

    const msgParams = [
      "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3", // Required
      JSON.stringify(typedData), // Required
    ];

    // Sign Typed Data
    connector
      .signTypedData(msgParams)
      .then((result) => {
        // Returns signature.
        console.log(result);
        router.push("/userhome")
      })
      .catch((error) => {
        // Error returned when rejected
        console.error(error);
      });
  };
  return (
    <>
      <Heading>Verify wallet</Heading>
      <Text>
        signing the message essentially proves that you are indeed the owner of
        the wallet address niftyrewards will not perform any transactions or
        require any approval from you
      </Text>
      <Button onClick={signTypedMessage}>Hello</Button>
    </>
  );
};

export default SignMessageView;
