import { useQuery, UseQueryOptions } from "react-query";
import { getCarts } from "./cartService";
import { GetCartsResponse } from "./cartType";

export const useGetCarts = (
  options?: UseQueryOptions<
    GetCartsResponse,
    unknown,
    GetCartsResponse,
    Array<string>
  >
) => {
  return useQuery(["get-carts"], getCarts, options);
};
