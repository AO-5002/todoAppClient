type User = {
  id?: number;
  title: string;
  createdAt?: string;
  completed: boolean;
};

type UserContextType = {
  users: User[] | null;
  setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
  deleteUser: (id: number) => Promise<void>;
  addUser: (userObject: User) => Promise<void>; // Optional, if you want to add user functionality
  updateUser: (id: number, updatedUser: User) => Promise<void>;
};

export type { User, UserContextType };
