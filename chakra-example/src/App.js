import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="blue">Register</Button>
            <Button colorScheme="yellow">Sign in</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Box bg="tomato" w="100%" p={4} color="white">
        <Text
          fontSize={"6xl"}
          fontFamily={"monospace"}
          color={"tomato"}
          as={""}
        >
          Hello world
        </Text>
        <Text fontSize={"sm"} fontFamily={"monospace"}>
          Hello world
        </Text>
        <Text as="i" fontSize={"3xl"}>
          Italic
        </Text>
        <Button colorScheme="red" variant="solid">
          Button
        </Button>
      </Box>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input w={"120px"} type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input w={"120px"} type="password" />
        <FormHelperText>Password will be discreet.</FormHelperText>
      </FormControl>
      <Box>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>Hallo</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default App;
