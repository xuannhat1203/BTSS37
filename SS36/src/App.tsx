import React, { useCallback, useState } from "react";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import Memo from "./components/Memo";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("hoa");
  console.log(setName);
  const increase = useCallback(() => {
    const handleIncrease = () => {};
    return handleIncrease;
  }, []);
  /*
      - khi mỗi lần function App re-render
      thì lại tạo ra 1 biến handleIncrease và gán giá trị là 1 function
      - function là kiểu dữ liệu tham chiếu refernce-type
      cứ mỗi lần sẽ tạo biến mỡi và gán giá trị mới
    */
  return (
    <>
      {/* Trong component App mỗi khi component re-render || render lần đàu thì các component con sẽ render */}
      <p>Giá trị của Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Memo</button>
      <UseEffect></UseEffect>
      <UseRef></UseRef>
      <UseContext></UseContext>
      <Memo increase={increase} name={name}></Memo>
      <UseCallback></UseCallback>
      <UseMemo></UseMemo>
    </>
  );
}
