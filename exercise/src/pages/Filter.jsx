import React from "react";
import { Box, Input, Stack, Flex, Center } from "@chakra-ui/react";
import { useState } from "react";

export const Filter = () => {
  const listFruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];
  const [data, setData] = useState(listFruits);
  return (
    <Box
      maxW={"500px"}
      bgGradient="linear(to-t, green.200, pink.500)"
      className="container"
      m={"auto"}
      mt={"20px"}
      pt="20px"
      pb="20px"
    >
      <Center>
        <Stack>
          <Input textAlign={"center"} color={"white"} bgColor={"green"} w={"300px"} type="text" />
          {data.map((item) => {
            return (
              <Flex borderRadius={"5px"} justify={"center"} bg={"white"}>
                {item}
              </Flex>
            );
          })}
        </Stack>
      </Center>
    </Box>
  );
};
