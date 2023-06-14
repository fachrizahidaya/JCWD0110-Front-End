import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaBlogger } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

export const BlogList = ({ data }) => {
  return (
    <Stack>
      {data.map((item) => {
        return (
          <Card>
            <CardHeader>
              <Heading size="md">
                {" "}
                <FaBlogger /> <CiBasketball size={"30px"} color="red" />{" "}
                {item.title}
              </Heading>
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
