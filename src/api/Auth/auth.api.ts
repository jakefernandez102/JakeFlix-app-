import { AxiosResponse } from "axios";
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
