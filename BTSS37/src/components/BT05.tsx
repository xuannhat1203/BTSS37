import { useCallback, useState } from "react";

export default function BT05() {
  const [name, setName] = useState<string>("");
  const [arr, setArr] = useState<string[]>([]);

  const handleAdd = useCallback(() => {
    setArr((prevArr) => [...prevArr, name]);
    setName("");
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
