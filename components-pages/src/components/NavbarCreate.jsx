import React from "react";
import { Flex, Spacer, ButtonGroup, Avatar } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { FaMedium, FaBlogger } from "react-icons/fa";

export const NavbarCreate = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Flex p="2">
          <FaBlogger size={"40px"} />
        </Flex>
        <Spacer />
        <ButtonGroup gap="2">
          <Avatar name={data} />
        </ButtonGroup>
      </Flex>
    </div>
  );
};
