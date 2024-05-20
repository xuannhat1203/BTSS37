import React, { useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
export default function Input() {
  const [name, setName] = useState<string>("");
  console.log(setName);
  const [user, setUser] = useState<User>({
    id: 1,
    name: "xuân nhất",
    email: "xuannhatvn211@gmail.com",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <label style={{ fontSize: "30px" }} htmlFor="">
        UserName:{" "}
      </label>
      <input
        name="name"
        style={{ width: "200px", height: "50px" }}
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Nhập họ tên của bạn"
      />
      <br></br>
      <label style={{ fontSize: "30px" }} htmlFor="">
        Email:{" "}
      </label>
      <input
        name="email"
        style={{ width: "200px", height: "50px" }}
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Nhập email của bạn"
      />
    </div>
  );
}
