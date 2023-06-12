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
import React from "react";

export const Landing = () => {
  return (
    <Box>
      <Box className="button">
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
      <Box className="contoh-text" bg="tomato" w="100%" p={4} color="white">
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
      <Box className="form">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input name="username" w={"120px"} type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <Input w={"120px"} type="password" />
          <FormHelperText>Password will be discreet.</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
