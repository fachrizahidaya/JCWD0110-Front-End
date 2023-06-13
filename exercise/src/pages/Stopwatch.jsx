import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Stopwatch = () => {
  return (
    <Box
      className="container"
      color={"white"}
      bgColor="black"
      maxW={"500px"}
      m={"auto"}
      mt={"20px"}
      borderRadius={"3px"}
      pb={"20px"}
    >
      <Stack>
        <Flex justify={"center"}>
          <Text fontSize="6xl">00:00</Text>
        </Flex>
        <Flex gap={"10px"} justify={"center"}>
          <Button colorScheme="orange">Start</Button>
          <Button colorScheme="red">Stop</Button>
          <Button colorScheme="yellow">Reset</Button>
        </Flex>
      </Stack>
    </Box>
  );
};
