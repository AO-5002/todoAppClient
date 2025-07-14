import MainLayout from "@/layout/MainLayout";
import { useState } from "react";
import { useContext } from "react";
import { NoteContext } from "@/context/NoteContext";
import type { User } from "@/utility/User";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TaskPage() {
  const { id } = useParams<{ id: string }>();
  const noteContext = useContext(NoteContext);
  const users: User[] = noteContext?.users ?? [];
  const updateUser = noteContext?.updateUser;
  const userOnId = users.find((user) => user.id === Number(id));
  const [title, setTitle] = useState(userOnId?.title || "");

  // Function to handle creating a new User object
  const handleEditUser = () => {
    if (title.trim() && updateUser && userOnId && userOnId.id) {
      const newUser: User = {
        title: title.trim(),
        completed: false,
        // Add other User properties as needed based on your User type
      };

      updateUser(userOnId.id, newUser);
      setTitle("");
    } else {
      console.error("Title is empty or updateUser function is not available.");
    }
  };

  const handleCancel = () => {
    setTitle((prevTitle) => userOnId?.title || prevTitle);
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
        <p>{userOnId?.createdAt}</p>
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
          <Link to={"/"}>
            <Button
              onClick={() => handleEditUser()}
              className="bg-indigo-400 text-white font-bold"
            >
              Save
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
