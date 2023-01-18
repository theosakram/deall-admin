import { useQuery, UseQueryOptions } from "react-query";
import { getUserById } from "./userService";
import { GetUserById, User } from "./userType";

export const useGetUserById = (
  payload: GetUserById,
  options?: UseQueryOptions<User, unknown, User, Array<string | GetUserById>>
) => {
  return useQuery(
    ["get-user-by-id", payload],
    () => getUserById(payload),
    options
  );
};
