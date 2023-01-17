import { useQuery, UseQueryOptions } from "react-query";
import { getProducts } from "./productService";
import { GetProductsRequest, GetProductsResponse } from "./productType";

export const useGetProducts = (
  payload: GetProductsRequest,
  options?: UseQueryOptions<
    GetProductsResponse,
    unknown,
    GetProductsResponse,
    Array<string | GetProductsRequest>
  >
) => {
  return useQuery(
    ["get-products", payload],
    () => getProducts(payload),
    options
  );
};
