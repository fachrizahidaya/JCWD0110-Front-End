import React, { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  //   menggunakan useState()

  const handleOnChange1 = (element) => {
    setNum1(+element.target.value);
  };

  const handleOnChange2 = (element) => {
    setNum2(+element.target.value);
  };

  const increment = () => {
    // menggunakan DOM
    // let num1 = +document.getElementById("num-1").value;
    // let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 + num2;
  };

  return (
    <div>
      <input
        id="num-1"
        type="number"
        onChange={(element) => handleOnChange1(element)}
      />
      <input
        id="num-2"
        type="number"
        onChange={(element) => handleOnChange2(element)}
      />
      <button onClick={increment}>+ Tambah</button>
      <button>- Kurang</button>
      <button>* Kali</button>
      <button>/ Bagi</button>
      <button>% Modulo</button>
      <button>** Pangkat 2</button>
      <p>Result here</p>
      <h1 id="result"></h1>
    </div>
  );
};
