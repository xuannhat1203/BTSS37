import React, { useCallback, useState } from "react";

export default function BT06() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    },
    []
  );
  const handleSubmit = useCallback(() => {
    console.log("Email:", email);
    console.log("Password:", password);
  }, [email, password]);
  return (
    <div>
      <label>Email:</label>
      <input
        name="email"
        value={email}
        onChange={handleInputChange}
        type="email"
      />
      <label>Password:</label>
      <input
        name="password"
        value={password}
        onChange={handleInputChange}
        type="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
