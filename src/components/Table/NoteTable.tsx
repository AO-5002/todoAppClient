import React, { useEffect } from "react";
import NoteItem from "./NoteItem";
import axios from "axios";

export default function NoteTable() {
  type User = {
    id: number;
    title: string;
    createdAt: string;
    completed: boolean;
  };

  const [users, setUsers] = React.useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  console.log("Users:", users);
  return (
    <div className="w-full col-start-2 col-end-4 row-start-2 row-end-4 px-8 flex flex-col gap-8">
      {users.map((user) => (
        <NoteItem
          key={user.id}
          title={user.title}
          createdAt={user.createdAt}
          completed={user.completed}
        />
      ))}
    </div>
  );
}
