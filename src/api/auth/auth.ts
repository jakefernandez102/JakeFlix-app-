import { AxiosResponse, isAxiosError } from "axios";
import { authAxiosClient } from "../../shared/config/axios-client";
import { User } from "../../shared/types";
export type LoginCredentials = Record<string, string>;

export const login = async (loginData: LoginCredentials): Promise<User[]> => {
  const { data }: AxiosResponse<User[]> = await authAxiosClient(
    "/users",
    loginData,
  );
  return data;
};

export const updateUserInfo = async (user: User) => {
  const { data: updatedUser } = await authAxiosClient.put(
    `/users/${user.id}`,
    user,
  );
  return updatedUser;
};

export const register = async (user: User) => {
  try {
    const userExists = await verifyIfEmailExists(user.email as string);
    if (!userExists) {
      throw new Error("Email already exists");
    }
    const { data: newUser } = await authAxiosClient.post("/users", user);
    return newUser;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error(`${error}`);
  }
};

const verifyIfEmailExists = async (email: string): Promise<boolean> => {
  try {
    const { data } = await authAxiosClient(`/users?email=${email}`);
    console.log("Data desde verifyEmail", data);
    return data.length !== 0 ? false : true;
  } catch (error) {
    console.log("Error desde verifyEmail", error);
  }

  return false;
};
