import axios from "axios";
import type { User } from "@/utility/User";
const BASEURL = import.meta.env.VITE_API_URL;

const loadUsers = async () => {
  try {
    const response = await axios.get(`${BASEURL}/todos`);
    return response.data;
  } catch (error) {
    console.error("Error loading users:", error);
  }
};

const getUserById = async (id: number) => {
  try {
    const response = await axios.get(`${BASEURL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  }
};

const deleteUser = async (id: number) => {
  try {
    await axios.delete(`${BASEURL}/todos/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

const addUser = async (userObject: User) => {
  try {
    const response = await axios.post(`${BASEURL}/todos`, userObject);
    console.log("User added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

const updateUser = async (id: number, updatedUser: User) => {
  try {
    const response = await axios.patch(`${BASEURL}/todos/${id}`, updatedUser);
    console.log("User updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export { loadUsers, deleteUser, addUser, updateUser, getUserById };
