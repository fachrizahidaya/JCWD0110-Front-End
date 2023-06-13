import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [interv, setInterv] = useState();

  const onStart = () => {
    setInterv(
      setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000)
    );
  };

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
          <Text fontSize="6xl">
            {Math.floor(timer / 60 < 10)
              ? "0" + Math.floor(timer / 60)
              : Math.floor(timer / 60)}
            :{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
          </Text>
        </Flex>
        <Flex gap={"10px"} justify={"center"}>
          <Button colorScheme="orange" onClick={() => onStart()}>
            Start
          </Button>
          <Button colorScheme="red" onClick={() => clearInterval(interv)}>
            Stop
          </Button>
          <Button colorScheme="yellow" onClick={() => setTimer(0)}>
            Reset
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};
