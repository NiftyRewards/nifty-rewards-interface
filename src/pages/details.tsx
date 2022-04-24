import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";
import { useWeb3Auth } from "../services/web3auth";
import vouchers from "data/vouchers";

const Hero = () => {
  return (
    <HStack
      w="full"
      h="300px"
      p="8"
      bgImage="/assets/DetailsBG.png"
      justify="space-between"
    >
      <VStack w="full" align="center" justify="center">
        <Heading>Azuki x Nike</Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&quot;s standard dummy
        </Text>
      </VStack>
      <HStack w="full" align="center" justify="center">
        <Avatar
          bgColor="transparent"
          size="3xl"
          name="Logos"
          src="/assets/CampaignLogos.png"
        />
      </HStack>
    </HStack>
  );
};

const NFTDetails = () => {
  const { provider, logout, getUserInfo, getAccounts, getBalance, web3Auth } =
    useWeb3Auth();
  // login,
  // logout,
  // getUserInfo,
  // getAccounts,
  // getBalance,
  // signMessage,
  // signTransaction,
  // signAndSendTransaction,
  // web3Auth,
  // chain,

  const getInfos = async () => {
    const web3 = new Web3(web3Auth.provider);
    const address_w3a = (await web3.eth.getAccounts()[0];

    axios
      .get(`https://nifty-rewards.herokuapp.com/users/nfts/${address_w3a}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

  };

  useEffect(() => {
    if (provider) {
      getInfos();
    }
  }, [provider]);

  return (
    <HStack w="full" p="8" align="start">
      <VStack px="4">
        <Heading>Eligible NFTs</Heading>
        <HStack>
          <Card />
          <Card2 />
        </HStack>
      </VStack>
      <VStack>
        <Heading>More Information</Heading>
        <VStack w="full" align="start">
          <Text>
            <Box textColor="primary.400">Location:</Box> WOrldwide official nike
            stores
          </Text>
          <Text>
            <Box textColor="primary.400">start date:</Box> 21/04/2022
          </Text>
          <Text>
            <Box textColor="primary.400">end date:</Box> 25/04/2022
          </Text>
        </VStack>
      </VStack>
    </HStack>
  );
};

const Card = () => {
  return (
    <VStack w="full" justify="center" bg="gray.800" borderRadius="lg">
      <Image
        width="full"
        objectFit="contain"
        src="/assets/azuki1.png"
        alt="Card Image"
        // borderRadius="8"
      />
      <Box w="full" textAlign="center">
        <Text>azuki #9647</Text>
      </Box>
    </VStack>
  );
};

const Card2 = () => {
  return (
    <VStack w="full" justify="center" bg="gray.800" borderRadius="lg">
      <Image
        width="full"
        objectFit="contain"
        src="/assets/azuki2.png"
        alt="Card Image"
        // borderRadius="8"
      />
      <Box w="full" textAlign="center">
        <Text>azuki #9107</Text>
      </Box>
    </VStack>
  );
};

const Vouchers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="full" justify="center">
      <VoucherModal isOpen={isOpen} onClose={onClose} />

      <Heading>Available vouchers</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        {vouchers.map((voucher) => (
          <VStack
            bg="primary.400"
            borderRadius="lg"
            h="120px"
            alignItems="center"
            justify="center"
            p="4"
            onClick={onOpen}
            key={voucher.text}
          >
            <Text color="black">{voucher.text}</Text>
            <Text color="black" fontSize="small">
              {voucher.text2}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

function VoucherModal({ isOpen, onClose }) {
  const finalRef = React.useRef();
  const toast = useToast();
  const [isRedeeming, setIsRedeeming] = useState(false);

  const redeemVoucher = () => {
    toast({
      title: "10% off footwear",
      description: "You have successfully redeemed this voucher",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    console.log("redeem voucher");
    setIsRedeeming(true);
    setTimeout(() => {
      toast({
        title: "10% off footwear",
        description: "You have successfully redeemed this voucher",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsRedeeming(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that&quot;ll receive focus on close.
      </Box>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w="full" textAlign="center" fontSize="3xl">
            10% off Footwear
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            Terms and conditions:
            <UnorderedList fontSize="small">
              <ListItem>
                Please make sure to read the terms and conditions before
                redemption
              </ListItem>
              <ListItem>
                Each specific voucher can only be redeemed once
              </ListItem>
              <ListItem>
                Make sure that this voucher is presented to the relevant parties{" "}
              </ListItem>
              <ListItem>
                By clicking on “redeem” you agree to the terms and conditions
                set out by the counter party
              </ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalFooter w="full" justifyContent="space-between">
            <Button w="full" colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button w="full" isLoading={isRedeeming} onClick={redeemVoucher}>
              Redeem
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const Details = () => {
  return (
    <VStack w="full">
      <Hero />
      <NFTDetails />
      <Vouchers />
    </VStack>
  );
};

export default Details;
