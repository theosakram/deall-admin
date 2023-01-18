import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import { Cart, GetCartByIdRequest, GetCartsResponse } from "./cartType";

export const getCarts = () => {
  return fetcher<GetCartsResponse>(`${BASE_URL}/carts`);
};

export const getCartById = (payload: GetCartByIdRequest) => {
  return fetcher<Cart>(`${BASE_URL}/carts/${payload.id}`);
};
