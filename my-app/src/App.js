import "./App.css";
import { Item } from "./pages/Item";
import { Landing } from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import LandingClass from "./pages/LandingClass";
import { Test } from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/class" element={<LandingClass />}></Route>
      </Routes>
    </div>
  );
}

export default App;
