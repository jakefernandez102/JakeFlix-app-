import { ReactNode } from "react";
import { User } from "./user";

export interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateDBUser: (user: User) => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
