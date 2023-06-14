import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export const SearchBar = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search" size="md" />
      </InputGroup>
    </Box>
  );
};
