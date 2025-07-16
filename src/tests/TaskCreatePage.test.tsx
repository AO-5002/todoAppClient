// import { render, screen, fireEvent } from "@testing-library/react";
// import { test, vi, expect } from "vitest";
// import TaskCreatePage from "@/pages/TaskCreatePage";
// import "@testing-library/jest-dom";
// import type { User } from "@/utility/User";

// // Mock the addUser API with types
// const mockAddUser = vi.fn<(user: User) => void>();

// vi.mock("@/utility/api/userAPI", () => ({
//   addUser: mockAddUser,
// }));

// test("calls addUser API when 'Add Task' is clicked", () => {
//   render(<TaskCreatePage />);

//   const input = screen.getByPlaceholderText("Add a Title");
//   fireEvent.change(input, { target: { value: "Test Task" } });

//   const addButton = screen.getByRole("button", { name: /add task/i });
//   fireEvent.click(addButton);

//   expect(mockAddUser).toHaveBeenCalledWith({
//     title: "Test Task",
//     completed: false,
//   });
// });
