import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

import router from "next/router";

const Hero = () => {
  return (
    <HStack
      w="full"
      h="300px"
      p="8"
      bgImage="/assets/Banner.png"
      justify="start"
    >
      <Flex>
        <HStack w="auto" p="16" align="center" justify="center">
          <Avatar
            bgColor="transparent"
            size="2xl"
            name="Logos"
            src="/assets/ADIDAS.png"
          />
        </HStack>
        <VStack w="full" align="center" justify="center">
          <VStack w="full" align="start" justify="center" textAlign="start">
            <Heading>ADIDAS</Heading>
            <Text fontSize="small">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&quot;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </HStack>
  );
};

const Tables = () => {
  return (
    <TableContainer w="full">
      <Table size="md">
        <Thead>
          <Tr>
            <Th>Campaign Name</Th>
            <Th>Status</Th>
            <Th isNumeric>Total</Th>
            <Th isNumeric>Claimed</Th>
            <Th isNumeric>Date Started</Th>
            <Th isNumeric>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Shoes Sale -30%</Td>
            <Td>ongoing</Td>
            <Td isNumeric>1000</Td>
            <Td isNumeric>750</Td>
            <Td isNumeric>24 05 2022</Td>
            <Td isNumeric>30 Days Left</Td>
          </Tr>
          <Tr>
            <Td>Marathon Entry Pass</Td>
            <Td>ongoing</Td>
            <Td isNumeric>1000</Td>
            <Td isNumeric>500</Td>
            <Td isNumeric>24 05 2022</Td>
            <Td isNumeric>30 Days Left</Td>
          </Tr>
          <Tr>
            <Td>Shoes Sale -50%</Td>
            <Td>ended</Td>
            <Td isNumeric>1000</Td>
            <Td isNumeric>1000</Td>
            <Td isNumeric>23 04 2022</Td>
            <Td isNumeric>0 Days Left</Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

const Analytics = () => {
  return (
    <VStack w="full">
      <Hero />
      <Tables />
      <Flex w="full" justify="center">
        <Button
          onClick={() => {
            router.push("/create-campaign");
          }}
        >
          Add campaign
        </Button>
      </Flex>
    </VStack>
  );
};

export default Analytics;
