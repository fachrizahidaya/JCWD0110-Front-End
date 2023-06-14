import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

export const RegisterButton = () => {
  const navigate = useNavigate();
  const toRegisterPage = () => {
    navigate("/register");
  };

  return (
    <Button
      onClick={toRegisterPage}
      colorScheme="teal"
      variant={"unstyled"}
    >Register</Button>
  );
};
