import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  RadioGroup,
  Stack,
  Radio,
  Heading,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import SignupCard from "./pages/Form";
import { ModalPage } from "./pages/ModalPage";
import { Landing } from "./pages/Landing";
import { useState } from "react";
import { ModalResult } from "./components/ModalResult";

function App() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("Male");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});

  const handleClick = () => setShow(!show);

  const onSetData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onRegister = () => {
    onOpen();
  };

  return (
    <>
      {/* <Box
        border={1}
        borderStyle="solid"
        borderColor="black"
        w="30vw"
        mx="auto"
        mt="50"
        p="7"
        borderRadius={10}
      >
        <Heading as="h1" mb={5}>
          Register
        </Heading>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          mb={5}
          name="username"
          onChange={(e) => onSetData(e)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          mb={5}
          name="email"
          onChange={(e) => onSetData(e)}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup size="md" mb={5}>
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={(e) => onSetData(e)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <FormLabel>Gender</FormLabel>
        <RadioGroup onChange={setValue} value={value} name="gender">
          <Stack direction="row">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Stack>
        </RadioGroup>

        <Center mt={5}>
          <Button colorScheme="cyan" mx="auto" onClick={onRegister}>
            Register
          </Button>
        </Center>
      </Box>
      <ModalResult
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        data={data}
        gender={value}
      /> */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/tes" element={<SignupCard />}></Route>
        <Route path="/modal" element={<ModalPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
