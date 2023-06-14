import React from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Forms = () => {
  const [data, setData] = useState({});
  console.log(data);
  const [move, setMove] = useState(false);
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const toWritePage = (e) => {
    navigate("/write");
    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {};
  return (
    <div>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleChange(e)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          id="password"
          onClick={(e) => handleChange(e)}
        />
        <Button>Submit</Button>
      </FormControl>
    </div>
  );
};
