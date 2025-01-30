import { ReactNode } from "react";
import { User } from "./User.types";

export interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  updateDBUser: (user: User) => void;
  signOut: () => void;
}

export interface AuthProvider {
  children: ReactNode;
}
