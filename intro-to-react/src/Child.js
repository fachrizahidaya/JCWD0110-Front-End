import React from "react";
import { Child1 } from "./Child1";
import "./Child.css";

export const Child = (props) => {
  // internal styling
  const styles = {
    h1: {
      color: "yellowgreen",
    },
  };
  return (
    <>
      <div>
        <h1 style={styles.h1}>Name: {props.data.name}</h1>
        {/* inline style */}
        <h1 style={{ color: "yellow" }}> Age: {props.data.age}</h1>
        {/* css classes */}
        <h1 className="color-red"> Batch: {props.data.batch}</h1>
        <h1> Address: {props.data.address}</h1>
      </div>
    </>
  );
};
