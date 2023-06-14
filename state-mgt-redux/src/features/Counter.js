import React from "react";
import { Button, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((globalState) => globalState.counterSlice.value);
  const dispatch = useDispatch();
  // const count1 = useSelector((globalState) => globalState.number.number);

  const tambahCustom = () => {
    const value = +document.getElementById("number").value;
    dispatch(incrementByAmount(value));
  };
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Text>{count}</Text>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Input type="number" id="number" />
      <Button onClick={tambahCustom}>Tambah Custom</Button>
    </div>
  );
};
