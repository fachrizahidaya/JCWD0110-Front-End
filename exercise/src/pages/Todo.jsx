import React from "react";
import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useState, useRef } from "react";

export const Todo = () => {
  const listTodo = ["Coding", "Eat", "Sleep"];
  const [data, setData] = useState(listTodo);
  const activity = useRef();

  const onAdd = () => {
    const word = activity.current.value;
    setData([...data, word]);
    activity.current.value = ""
  };

  const onDelete = (index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setData(arr);
  };

  return (
    <Stack alignItems="center" w="100vw" h="100vh" bgColor="blue.500">
      <Heading>TO DO LIST APP</Heading>
      <Flex>
        <Input ref={activity} w="40vw" />
        <Button onClick={onAdd}>Add</Button>
      </Flex>
      <Box>
        {data.map((item, index) => {
          return (
            <Flex justifyContent="center" alignItems="center">
              <Flex
                w="40vw"
                m="2"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                border="1px solid white"
                fontWeight="bold"
                fontSize="2xl"
              >
                {item}
              </Flex>
              <Button onClick={() => onDelete(index)}>Delete</Button>
            </Flex>
          );
        })}
      </Box>
    </Stack>
  );
};
