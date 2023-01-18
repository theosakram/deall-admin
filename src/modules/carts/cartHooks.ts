import { useMemo } from "react";
import { useQuery, UseQueryOptions } from "react-query";
import { useGetUserById } from "../user/userHooks";
import { getCartById, getCarts } from "./cartService";
import {
  Cart,
  CartWithUsername,
  GetCartByIdRequest,
  GetCartsResponse,
} from "./cartType";

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

export const useGetCartById = (
  payload: GetCartByIdRequest,
  options?: UseQueryOptions<
    CartWithUsername,
    unknown,
    CartWithUsername,
    Array<string | GetCartByIdRequest>
  >
) => {
  const cartByIdResponse = useQuery(
    ["get-cart-by-id", payload],
    () => getCartById(payload),
    options
  );

  const userByIdResponse = useGetUserById(
    { id: cartByIdResponse.data?.userId },
    { enabled: !!cartByIdResponse.data?.userId }
  );

  const finalData = useMemo((): CartWithUsername => {
    if (cartByIdResponse.data && userByIdResponse.data) {
      return {
        ...cartByIdResponse.data,
        userName: `${userByIdResponse.data.firstName} ${userByIdResponse.data.lastName}`,
      };
    }

    return undefined;
  }, [cartByIdResponse.data, userByIdResponse.data]);

  return {
    data: finalData,
    isLoading: cartByIdResponse.isLoading,
  };
};
