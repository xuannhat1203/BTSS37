import React, { useCallback, useState } from "react";

export default function BT03() {
  const [color, setColor] = useState<string>("white");
  const changeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor((pre) => (pre = e.target.value));
  }, []);
  return (
    <div>
      <h4>Màu người dùng chọn: {color}</h4>
      <label>
        <input onChange={changeColor} type="color" id="colorBox" />
        Chọn màu sắc
      </label>
      <h4>Màu hiển thị:</h4>
      <div
        style={{ width: "100px", height: "70px", backgroundColor: `${color}` }}
      />
    </div>
  );
}
