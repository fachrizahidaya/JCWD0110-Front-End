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
  const [filterList, setFilterList] = useState(listFruits);
  console.log(filterList);

  const handleFilter = (element) => {
    console.log(element.target.value);
    if (element.target.value === "") {
      return setFilterList(listFruits);
    }
    const filteredValues = listFruits.filter(
      (item) =>
        item.toLowerCase().indexOf(element.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
    console.log(filteredValues);
  };

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
          <Input
            placeholder="Search here.."
            textAlign={"center"}
            color={"black"}
            bgColor={"white"}
            w={"300px"}
            type="text"
            onChange={(element) => handleFilter(element)}
          />
          {filterList.map((item) => {
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
