import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import FilterMenu from "./FilterMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mt-4 w-full h-full">
      <ul className="flex space-x-4">
        <li className="flex items-center gap-4 w-full">
          <Link to={"/task/new"}>
            <Button className="flex gap-2 text-white bg-indigo-500 hover:cursor-pointer hover:bg-white hover:text-indigo-500 hover:shadow-xl hover:scale-105 font-bold">
              <Plus />
              New Task
            </Button>
          </Link>
          <FilterMenu />
        </li>
      </ul>
    </nav>
  );
}
