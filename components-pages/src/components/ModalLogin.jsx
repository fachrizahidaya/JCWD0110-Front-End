import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const ModalLogin = ({ isOpen, onClose }) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login to Blog</ModalHeader>
        <ModalCloseButton />
        <ModalBody>contoh login</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Login
          </Button>
          <Button variant="ghost" onClick={onclose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
