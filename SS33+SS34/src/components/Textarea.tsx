import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  console.log(text);
  return (
    <div>
      <label htmlFor="">Ghi chú</label>
      <textarea
        onChange={handleChange}
        name=""
        id=""
        placeholder="Nhập ghi chú tại đây"
      ></textarea>
    </div>
  );
}
