import React from "react";
import { Child } from "./Child";
import { Child1 } from "./Child1";
import { useRef } from "react";

export const Parent = () => {
  const reference = useRef();

  return (
    <>
      <h1>This is Parent Component</h1>
      <Child data={{ name: "Budi", age: 23, batch: 4, address: "jakarta" }} />
    </>
  );
};
