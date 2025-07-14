import "./App.css";
import Primary from "./pages/Primary";
import TaskPage from "./pages/TaskPage";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import type { User } from "@/utility/User";
import { NoteContext } from "@/context/NoteContext";
import TaskCreatePage from "./pages/TaskCreatePage";

function App() {
  const [users, setUsers] = React.useState<User[] | null>(null);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`);
      setUsers(
        (prevUsers) => prevUsers?.filter((user) => user.id !== id) || null
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const addUser = async (userObject: User) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/todos",
        userObject
      );
      setUsers((prevUsers) => [...(prevUsers || []), response.data]);
      console.log("User added successfully:", response.data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const updateUser = async (id: number, updatedUser: User) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/todos/${id}`,
        updatedUser
      );
      setUsers((prevUsers) =>
        prevUsers
          ? prevUsers.map((user) =>
              user.id === id
                ? {
                    ...user,
                    ...updatedUser,
                  }
                : user
            )
          : null
      );
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <NoteContext.Provider
      value={{ users, setUsers, deleteUser, addUser, updateUser }}
    >
      <Routes>
        <Route path="/" element={<Primary />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/task/new" element={<TaskCreatePage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </NoteContext.Provider>
  );
}

export default App;
