import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import { removeKeyValueFromObject } from "src/shared/helper";
import { GetProductsRequest, GetProductsResponse } from "./productType";

export const getProducts = (payload: GetProductsRequest) => {
  const withoutSearch = removeKeyValueFromObject({ ...payload }, "search");
  const searchParams = new URLSearchParams(
    withoutSearch as Record<string, string>
  );

  return fetcher<GetProductsResponse>(
    `${BASE_URL}/products/search?q=${payload.search}&${searchParams.toString()}`
  );
};
