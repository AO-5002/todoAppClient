import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical height={16} width={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex items-center gap-2">
            <p>Edit</p> <Pencil height={8} width={8} />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
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
