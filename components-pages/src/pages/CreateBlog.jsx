import React from 'react'
import {Box, Stack, Flex} from "@chakra-ui/react"
import { NavbarCreate } from '../components/NavbarCreate'


export const CreateBlog = () => {
  return (
    <Box ml={"20px"} mt={"20px"} mr={"20px"}>
      <Stack>
        <NavbarCreate />
        <Flex mt={"30px"}>
          <Box w={"70%"}>
          </Box>
          <Box w={"30%"}>
            Sidebar
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}
