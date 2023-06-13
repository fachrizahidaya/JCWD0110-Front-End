import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
