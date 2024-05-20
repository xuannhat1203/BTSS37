import React, { useState } from "react";

export default function Selection() {
  const [select, setSelect] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  console.log(select);
  return (
    <div>
      <select onChange={handleChange} name="" id="">
        <option value="Nam">Nam</option>
        <option selected value="Nữ">
          Nữ
        </option>
        <option value="Khác">Khác</option>
      </select>
    </div>
  );
}
