import MainLayout from "@/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { addUser as addUserApi } from "@/utility/api/userAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "@/utility/User";
import { userValidation } from "@/utility/validation/userSchema";

export default function TaskCreatePage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: addUser } = useMutation({
    mutationFn: (user: User) => addUserApi(user),
    onSuccess: () => {
      // Invalidate the users list cache to refresh the data
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/"); // Navigate to homepage on success
    },
  });

  // State to manage the title input
  const [title, setTitle] = useState("");

  // Function to handle creating a new User object
  const handleAddUser = () => {
    if (title.trim() && addUser) {
      const result = userValidation.safeParse({
        title: title.trim(),
        completed: false,
      });

      if (result.success) {
        addUser(result.data);
        setTitle("");
      } else {
        console.error("Validation failed:", result.error);
        // Handle validation errors (e.g., show a message to the user)
      }
    }
  };

  return (
    <MainLayout data-testid="task-page">
      <div className="w-full col-start-2 col-span-2 row-span-1 flex flex-col items-center justify-center p-8">
        <h1 className="w-full text-4xl font-light tracking-wide items-start">
          <strong>Title: </strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a Title"
            className="outline-none"
          />
        </h1>
      </div>
      <div className="w-full col-start-2 col-span-2 row-start-2 row-span-2 flex flex-col items-start px-8 gap-4">
        <article className="w-full text-zinc-400 text-sm font-light tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi,
          nihil asperiores ullam similique at possimus unde laudantium enim
          blanditiis quas fuga, libero odit obcaecati cum architecto
          exercitationem beatae? Deleniti?
        </article>
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <Button className="bg-red-400 text-white font-bold">Cancel</Button>
          </Link>
          <Button
            onClick={handleAddUser}
            className="bg-green-500 text-white font-bold"
          >
            Add Task
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
