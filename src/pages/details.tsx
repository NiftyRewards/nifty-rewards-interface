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
import useStore from "state";

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
  const { provider } = useWeb3Auth();

  const getInfos = async () => {
    // const web3 = new Web3(web3Auth.provider);
    // const address_w3a = (await web3.eth.getAccounts()[0];
    // axios
    //   .get(`https://nifty-rewards.herokuapp.com/users/nfts/${address_w3a}`)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  useEffect(() => {
    if (provider) {
      getInfos();
    }
  }, [provider]);

  return (
    <HStack w="full" p="8" align="center">
      {/* <VStack px="4">
          <Heading>Available vouchers</Heading>
          <Card />
          <Card2 />
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
        </VStack> */}
    </HStack>
  );
};

const ListCard1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bears = useStore((state) => state.bears);

  return (
    <HStack spacing="16">
      <VoucherModal isOpen={isOpen} onClose={onClose} />
      <Image
        height="full"
        objectFit="contain"
        src="/assets/azuki1.png"
        alt="Card Image"
        borderRadius="8"
      />
      <VStack h="auto">
        {vouchers.map((voucher) => (
          <VStack
            bg={
              bears == 1 && voucher.text == "10% off footwear"
                ? "gray.300"
                : "primary.400"
            }
            borderRadius="lg"
            h="80px"
            w="full"
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
      </VStack>
    </HStack>
  );
};

const ListCard2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack spacing="16">
      <VoucherModal isOpen={isOpen} onClose={onClose} />
      <Image
        height="full"
        objectFit="contain"
        src="/assets/azuki2.png"
        alt="Card Image"
        borderRadius="8"
      />
      <VStack h="auto">
        {vouchers.map((voucher) => (
          <VStack
            bg="primary.400"
            borderRadius="lg"
            h="80px"
            w="full"
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

// const Vouchers = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <VStack w="full" justify="center">
//       <VoucherModal isOpen={isOpen} onClose={onClose} />

//       <Heading>Available vouchers</Heading>
//       <SimpleGrid columns={[1, null, 2]} spacing="40px">
//         {vouchers.map((voucher) => (
//           <VStack
//             bg="primary.400"
//             borderRadius="lg"
//             h="120px"
//             alignItems="center"
//             justify="center"
//             p="4"
//             onClick={onOpen}
//             key={voucher.text}
//           >
//             <Text color="black">{voucher.text}</Text>
//             <Text color="black" fontSize="small">
//               {voucher.text2}
//             </Text>
//           </VStack>
//         ))}
//       </SimpleGrid>
//     </VStack>
//   );
// };

const Vouchers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="full" justify="center">
      <VoucherModal isOpen={isOpen} onClose={onClose} />

      <Heading>Available vouchers</Heading>
      <VStack>
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
      </VStack>
    </VStack>
  );
};

function VoucherModal({ isOpen, onClose }) {
  const finalRef = React.useRef();
  const toast = useToast();
  const [isRedeeming, setIsRedeeming] = useState(false);
  const increase = useStore((state) => state.increase);

  const redeemVoucher = () => {
    console.log("redeem voucher");
    setIsRedeeming(true);
    setTimeout(() => {
      toast({
        title: "10% off footwear",
        description: "You have successfully redeemed this voucher",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsRedeeming(false);
      increase();
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that&quot;ll receive focus on close.
      </Box> */}

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

const NFTList = () => {
  return (
    <VStack spacing="16">
      <Heading py="4">Available vouchers</Heading>
      <ListCard1 />
      <ListCard2 />
    </VStack>
  );
};

const Details = () => {
  return (
    <VStack w="full">
      <Hero />
      {/* <NFTDetails />
      <Vouchers /> */}
      <NFTList />
    </VStack>
  );
};

export default Details;
