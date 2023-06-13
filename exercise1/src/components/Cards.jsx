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
    { name: "saras", age: 20 },
  ];
  const [data, setData] = useState(listName);

  return (
    <Box>
      {data.map((item) => {
        return (
          <Card margin={"20px"} maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Ini card</Heading>
                <Text>{item.name}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {item.age}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        );
      })}
    </Box>
  );
};
