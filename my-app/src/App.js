import "./App.css";
import { Item } from "./pages/Item";
import { Landing } from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import LandingClass from "./pages/LandingClass";
import { Test } from "./Test";
import { LandingJS } from "./pages/LandingJS";
import useCounter from "./Counter";
import { Calculator } from "./Calculator";

function App() {
  const [count, increment, decrement] = useCounter(0, 1);

  return (
    <div className="App">
      <Calculator />
      {/* <h1>{count}</h1> */}
      {/* <button onClick={increment}>Increment</button> */}
      {/* <button onClick={decrement}>Decrement</button> */}
      <Routes>
        {/* <Route path="/" element={<Landing />}></Route> */}
        <Route path="/item" element={<Item />}></Route>
        <Route path="/class" element={<LandingClass />}></Route>
        <Route path="/js" element={<LandingJS />}></Route>
      </Routes>
    </div>
  );
}

export default App;
