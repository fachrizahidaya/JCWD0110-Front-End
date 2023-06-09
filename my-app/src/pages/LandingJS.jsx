import { useState, useEffect, useRef } from "react";

export const LandingJS = () => {
  const [count, setCount] = useState(0); // top-level
  const [input, setInput] = useState();
    useEffect(() => {
      console.log(`You enter ${count}`);
    });
  const name = useRef();
  const password = useRef();

  const onSubmit = () => {
    console.log(name)
    console.log(password)
  };

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>You clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>
        <input ref={name} type="text" placeholder="isi nama" />
        <input ref={password} type="password" placeholder="isi password" />
        <h1>{input}</h1>
        <button onClick={() => onSubmit()}>Input</button>
      </div>
    </div>
  );
};
