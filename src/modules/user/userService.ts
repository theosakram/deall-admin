import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import { GetUserById, User } from "./userType";

export const getUserById = (payload: GetUserById) => {
  return fetcher<User>(`${BASE_URL}/users/${payload.id}`);
};
