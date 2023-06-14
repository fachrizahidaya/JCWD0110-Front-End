import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Sidebar = ({ data }) => {
  
  return (
    <Box>
      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {data.map((item) => {
          return (
            <>
              <Box h="40px">{item.title}</Box>
            </>
          );
        })}
      </VStack>
    </Box>
  );
};
