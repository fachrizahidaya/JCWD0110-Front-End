import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Cards = () => {
  const listName = [
    { name: "abdul", age: 23 },
    { name: "abdi", age: 18 },
  ];
  const [data, setData] = useState(listName);

  return (
    <Box>
      <Card maxW="sm">
        {data.map((item) => {
          return (
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Ini card</Heading>
                <Text>{item.name}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {item.age}
                </Text>
              </Stack>
            </CardBody>
          );
        })}
        <Divider />
      </Card>
    </Box>
  );
};
