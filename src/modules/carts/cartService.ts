import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import { GetCartsResponse } from "./cartType";

export const getCarts = () => {
  return fetcher<GetCartsResponse>(`${BASE_URL}/carts`);
};
