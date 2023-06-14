import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ModalLogin } from "./ModalLogin";

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant={"unstyled"}>
        Sign In
      </Button>
      <ModalLogin isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};
