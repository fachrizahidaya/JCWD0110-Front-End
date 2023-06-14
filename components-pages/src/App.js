import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Register } from "./pages/Register";
import { CreateBlog } from "./pages/CreateBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/write" element={<CreateBlog />}></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
