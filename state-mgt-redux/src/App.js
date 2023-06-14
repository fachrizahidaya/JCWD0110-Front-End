import { Button, Input, Text } from "@chakra-ui/react";
import "./App.css";
import { Comp1 } from "./components/Comp1";

function App() {
  const onAdd = () => {
    localStorage.setItem("username", "malik");
  };

  const onAddSession = () => {
    sessionStorage.setItem("username", "abdur");
  };

  const onGet = () => {
    const key = document.getElementById("text").value;
    const value = localStorage.getItem(key);
    document.getElementById("item").innerText = value;
  };

  const onDelete = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className="App">
      {/* <Comp1/> */}
      <Text>Ini button setItem</Text>
      <Button onClick={onAdd}>Add</Button>
      <Text>Ini button getItem</Text>
      <Input w={"100px"} type="text" id="text" />
      <Button onClick={onGet}>Get</Button>
      <Text id="item"></Text>
      <Text>Ini button removeItem</Text>
      <Button onClick={onDelete}>Delete</Button>
      <Text>Ini button setItem session storage</Text>
      <Button onClick={onAddSession}>Add</Button>
    </div>
  );
}

export default App;
