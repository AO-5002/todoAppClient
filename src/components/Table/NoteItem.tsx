import { CalendarClock } from "lucide-react";
import DropMenu from "./DropMenu";

interface NoteProps {
  title: string;
  createdAt: any;
  completed?: boolean;
}

export default function NoteItem({ title, createdAt, completed }: NoteProps) {
  return (
    <div className="w-full h-[100px] bg-[#fff] rounded-lg p-4 border flex justify-center gap-8 hover:shadow-xl hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01] items-center">
      <div className="w-full flex flex-col items-start justify-center gap-2">
        <h1 className="text-xl font-bold"> {title}</h1>
        <span className="flex items-center gap-2">
          <CalendarClock height={16} width={16} />
          <p className="text-xs text-zinc-400">{createdAt}</p>
        </span>
      </div>
      <DropMenu />
    </div>
  );
}
