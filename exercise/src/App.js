import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Stopwatch } from "./pages/Stopwatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Stopwatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
