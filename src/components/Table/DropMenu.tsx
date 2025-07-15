import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserAPI } from "@/utility/api/userAPI"; // Adjust the

interface DropProps {
  idVal: number;
}

export default function DropMenu({ idVal }: DropProps) {
  const queryClient = useQueryClient();
  const { mutate: deleteUser } = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUserAPI(id),

    onSuccess: () => {
      // Optionally, you can invalidate queries or perform other actions after deletion
      console.log(`User with ID ${idVal} deleted successfully.`);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", idVal] });
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="w-8 h-8"
        onClick={(e) => e.stopPropagation()}
      >
        <EllipsisVertical height={16} width={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => deleteUser({ id: idVal })}>
          <span className="flex items-center gap-2">
            <p>Delete</p>{" "}
            <Trash
              height={8}
              width={8}
              color="red"
              fill="oklch(70.4% 0.191 22.216)"
            />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
