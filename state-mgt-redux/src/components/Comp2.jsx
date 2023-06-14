import { Box } from "@chakra-ui/react";
import React from "react";

export const Comp2 = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
            <Box>{item.fruit}</Box>
        )
      })}
    </div>
  );
};
