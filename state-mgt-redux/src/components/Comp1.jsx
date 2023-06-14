import React, { useState } from "react";
import { Comp2 } from "./Comp2";

export const Comp1 = () => {
  const [data, setData] = useState([
    { fruit: "Apple" },
    { fruit: "Mango" },
    { fruit: "Guava" },
  ]);
  return (
    <div>
      <Comp2 data={data} />
    </div>
  );
};
