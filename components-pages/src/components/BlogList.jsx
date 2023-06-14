import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const BlogList = ({ data }) => {
  return (
    <Stack>
      {data.map((item) => {
        return (
          <Card>
            <CardHeader>
              <Heading size="md"> {item.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{item.desc}</Text>
            </CardBody>
          </Card>
        );
      })}
    </Stack>
  );
};
