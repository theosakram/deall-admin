import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import {
  Cart,
  GetCartByIdRequest,
  GetCartsRequest,
  GetCartsResponse,
} from "./cartType";

export const getCarts = (payload: GetCartsRequest) => {
  const searchParams = new URLSearchParams(payload as Record<string, string>);

  return fetcher<GetCartsResponse>(
    `${BASE_URL}/carts?${searchParams.toString()}`
  );
};

export const getCartById = (payload: GetCartByIdRequest) => {
  return fetcher<Cart>(`${BASE_URL}/carts/${payload.id}`);
};
