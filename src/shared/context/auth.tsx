import { createContext, useState } from "react";
import { AuthContextType, AuthProviderProps, User } from "../types";
import { updateUserInfo } from "../../api/auth/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const INITIAL_STATE: User = {
  id: 0,
  name: "",
  email: "",
  password: "",
  profiles: [],
  authenticated: false,
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") || JSON.stringify(INITIAL_STATE)),
  );
  const updateDBUser = async (user: User) => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        const updatedUser = await updateUserInfo(user);
        setUser(updatedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("user");
    setUser(INITIAL_STATE);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        updateDBUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
