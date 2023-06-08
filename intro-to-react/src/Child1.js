import React from "react";

export const Child1 = (props) => {
  return (
    <div>
      <h1>Name {props.name}</h1>
      <h1>Age {props.age}</h1>
    </div>
  );
};
