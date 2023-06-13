import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
