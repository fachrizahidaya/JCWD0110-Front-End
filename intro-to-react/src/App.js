import "./App.css";
import Profile from "./Profile";
import { Landing } from "./pages/Landing";
import React from "react";
import { List2 } from "./components/List2";
import { salam } from "./pages/Landing";
import { Parent } from "./Parent";
import { Child } from "./Child";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { User } from "./User";

export const App = () => {
  const angka = 10;
  function perkalian() {
    const kali = angka * angka;
    return <>{kali}</>;
  }
  return (
    <>
      <div className="App">
        <List2 />
        <button>Submit</button>
        <br />
        <br />
        <label>Result:</label>
        <Parent />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
      </div>
    </>
  );
};

function math() {
  const multiple = 5 * 5;
  return <div>{multiple}</div>;
}
