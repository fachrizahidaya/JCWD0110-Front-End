import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

export const ModalResult = ({ isOpen, onClose, onOpen, data, gender }) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Username: {data.username} <br />
            Email: {data.email} <br />
            Password: {data.password} <br />
            Gender: {gender}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="cyan" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
