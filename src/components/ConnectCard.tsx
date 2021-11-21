import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import usePhantom from "../hooks/usePhantom";

export default function BalanceCard() {
  const { provider, balance, logs, connect, disconnect, isConnected } =
    usePhantom();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w="100%" align="center">
      {provider && isConnected ? (
        <>
          <Button onClick={onOpen}>
            <Flex d="column">
              <Text fontSize="sm">{balance && balance.toFixed(2)} SOL</Text>
              <Text maxW="100px" fontSize="xs">
                {provider.publicKey?.toBase58().substr(0, 4)}
                ...
                {provider.publicKey
                  ?.toBase58()
                  .substr(provider.publicKey?.toBase58().length - 4, 4)}
              </Text>
            </Flex>
          </Button>

          <Modal mx="4" onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Your wallet</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold">
                  {balance && balance.toFixed(2)} SOL
                </Text>

                <Text>{provider.publicKey?.toBase58()}</Text>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    disconnect();
                    onClose();
                  }}
                >
                  Disconnect
                </Button>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Button onClick={connect}>Connect</Button>
        </>
      )}
    </Flex>
  );
}
