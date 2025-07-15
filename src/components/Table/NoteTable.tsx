import NoteItem from "./NoteItem";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import type { User } from "@/utility/User";
import { loadUsers } from "@/utility/api/userAPI";

export default function NoteTable() {
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => loadUsers(),
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-zinc-400">Loading...</p>
        </div>
      ) : (
        <div className="w-full col-start-2 col-end-4 row-start-2 row-end-4 px-8 flex flex-col items-center justify-start gap-8">
          {users ? (
            users?.map((user: User) => (
              <NoteItem
                key={user.id}
                id={user.id || 0}
                title={user.title}
                createdAt={user.createdAt}
                completed={user.completed}
              />
            ))
          ) : (
            <div className=" w-full gap-2 flex items-center justify-center">
              <X color="oklch(70.5% 0.015 286.067)" />
              <h1 className="text-2xl text-zinc-400">No tasks!</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}
