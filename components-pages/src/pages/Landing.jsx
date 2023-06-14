import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import { BlogList } from "../components/BlogList";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

export const Landing = () => {
  const blogList = [
    {
      title: "Kisah Jogja",
      desc: "Asal usul Jogja",
    },
    {
      title: "Bahaya inflasi",
      desc: "Indonesia bersiap Inflasi",
    },
  ];
  const [data, setData] = useState(blogList);

  return (
    <Box ml={"20px"} mt={"20px"} mr={"20px"}>
      <Stack>
        <Navbar />
        <Flex mt={"30px"}>
          <Box w={"70%"}>
            <BlogList data={data} />
          </Box>
          <Box w={"30%"}>
            <Sidebar data={data} />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
