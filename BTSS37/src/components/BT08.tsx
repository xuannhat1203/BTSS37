import { useState, useMemo } from "react";
interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}
export default function BT08() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      userName: "User 1",
      email: "user1@example.com",
      address: "Address 1",
    },
    {
      id: 2,
      userName: "User 2",
      email: "user2@example.com",
      address: "Address 2",
    },
    {
      id: 3,
      userName: "User 3",
      email: "user3@example.com",
      address: "Address 3",
    },
  ]);
  const memoizedUsers = useMemo(() => users, [users]);
  return (
    <div>
      <ul>
        {memoizedUsers.map((user) => (
          <li key={user.id}>
            ID: {user.id} - Name: {user.userName}
          </li>
        ))}
      </ul>
    </div>
  );
}
