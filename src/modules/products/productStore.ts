import { useRouter } from "next/router";
import { create } from "zustand";
import { useGetProducts } from "./productHooks";
import { GetProductsRequest } from "./productType";

interface ProductStore {
  filter: GetProductsRequest;
  setFilter: (filter: GetProductsRequest) => void;
}

export const useZustandProduct = create<ProductStore>((set) => ({
  filter: {
    limit: 10,
    skip: 0,
    search: "",
  },
  setFilter: (filter: GetProductsRequest) => set({ filter }),
}));

export const useProductStore = () => {
  const { query } = useRouter();
  const filter = useZustandProduct((state) => state.filter);
  const page = query.page ? +query.page : 1;
  const productResponse = useGetProducts({
    ...filter,
    skip: (page - 1) * filter.limit,
  });

  return {
    productResponse,
  };
};
