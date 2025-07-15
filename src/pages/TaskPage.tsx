import MainLayout from "@/layout/MainLayout";
import { useState, useEffect } from "react";
import type { User } from "@/utility/User";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateUser as apiUpdateUser } from "@/utility/api/userAPI";
import { getUserById } from "@/utility/api/userAPI";
import { useNavigate } from "react-router-dom";
import { userValidation } from "@/utility/validation/userSchema";

export default function TaskPage() {
  const { id } = useParams<{ id: string }>();
  const userId = id ? Number(id) : undefined;
  const queryClient = useQueryClient(); // Add this hook
  const navigate = useNavigate();

  // Returns user based on ID
  const { data: userData } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () =>
      userId !== undefined
        ? getUserById(userId)
        : Promise.reject("User ID is undefined"),
    enabled: userId !== undefined,
  });

  // The state to manage the title input
  const [title, setTitle] = useState("");

  // Sync local state with fetched data
  useEffect(() => {
    if (userData?.title) {
      setTitle(userData.title);
    }
  }, [userData?.title]);

  // The mutation to update the user
  const { mutate: updateMutation } = useMutation({
    mutationFn: ({ id, user }: { id: number; user: User }) =>
      apiUpdateUser(id, user),
    onSuccess: () => {
      // Invalidate both the individual user cache and the users list cache
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/"); // Navigate to homepage on success
    },
  });

  // Function to handle creating a new User object
  const handleEditUser = () => {
    if (title.trim() && userData && userData.id) {
      const newUser: User = {
        ...userData, // Keep all existing properties
        title: title.trim(),
        // Don't override other properties like completed, createdAt, etc.
      };

      const result = userValidation.safeParse(newUser);

      if (result.success) {
        updateMutation({ id: userData.id, user: result.data });
        setTitle(() => newUser.title); // Update the title state after saving
      }
    } else {
      console.error("Title is empty or updateUser function is not available.");
    }
  };

  const handleCancel = () => {
    setTitle(userData?.title || "");
  };

  return (
    <MainLayout>
      <div className="w-full col-start-2 col-span-2 row-span-1 flex flex-col items-center justify-center p-8">
        <h1 className="w-full text-4xl font-light tracking-wide items-start">
          <strong>Title: </strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none"
          />
        </h1>
      </div>
      <div className="w-full col-start-2 col-span-2 row-start-2 row-span-2 flex flex-col items-start px-8 gap-4">
        <p>{userData?.createdAt}</p>
        <article className="w-full text-zinc-400 text-sm font-light tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi,
          nihil asperiores ullam similique at possimus unde laudantium enim
          blanditiis quas fuga, libero odit obcaecati cum architecto
          exercitationem beatae? Deleniti?
        </article>
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <Button
              onClick={() => handleCancel()}
              className="bg-red-400 text-white font-bold"
            >
              Cancel
            </Button>
          </Link>
          <Button
            onClick={() => handleEditUser()}
            className="bg-indigo-400 text-white font-bold"
          >
            Save
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
