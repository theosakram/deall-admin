import { BASE_URL } from "src/shared/constant";
import { fetcher } from "src/shared/fetcher";
import { removeKeyValueFromObject } from "src/shared/helper";
import { GetProductsRequest, GetProductsResponse } from "./productType";

export const getProducts = (payload: GetProductsRequest) => {
  const withoutSearch = removeKeyValueFromObject({ ...payload }, "search");
  const searchParams = new URLSearchParams(
    withoutSearch as Record<string, string>
  );

  if (payload.category) {
    return fetcher<GetProductsResponse>(
      `${BASE_URL}/products/category/${payload.category}`
    );
  }

  return fetcher<GetProductsResponse>(
    `${BASE_URL}/products/search?q=${payload.search}&${searchParams.toString()}`
  );
};

export const getProductCategories = () => {
  return fetcher<Array<string>>(`${BASE_URL}/products/categories`);
};
