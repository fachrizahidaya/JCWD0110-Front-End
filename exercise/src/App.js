import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Stopwatch } from "./pages/Stopwatch";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Stopwatch />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
