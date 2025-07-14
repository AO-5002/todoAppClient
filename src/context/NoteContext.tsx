import { createContext } from "react";
import type { UserContextType } from "../utility/User";

export const NoteContext = createContext<UserContextType | undefined>(
  undefined
);
