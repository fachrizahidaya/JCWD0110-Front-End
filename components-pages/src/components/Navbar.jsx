import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FaMedium, FaBlogger } from "react-icons/fa";
import { EditIcon } from "@chakra-ui/icons";
import { SearchBar } from "./SearchBar";
import { LoginButton } from "./LoginButton";
import { RegisterButton } from "./RegisterButton";
import { ModalLogin } from "./ModalLogin";

export const Navbar = () => {
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Flex p="2">
          <FaBlogger size={"40px"} />
          <SearchBar />
        </Flex>
        <Spacer />
        <EditIcon />
        <ButtonGroup gap="2">
          <LoginButton />
          <ModalLogin />
          <RegisterButton />
        </ButtonGroup>
      </Flex>
    </div>
  );
};
