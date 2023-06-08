import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>This is Home</div>
      <Link to={"/about"}>to About</Link>
    </>
  );
};
