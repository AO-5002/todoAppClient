import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export default function FilterMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="flex gap-2 text-white bg-zinc-800 hover:cursor-pointer hover:shadow-xl hover:scale-105 font-bold">
          <SlidersHorizontal /> Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort By:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex items-center gap-2">
            <p>Ascending</p>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex items-center gap-2">
            <p>Descending</p>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
