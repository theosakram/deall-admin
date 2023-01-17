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
    select: "",
    skip: 0,
    search: "",
  },
  setFilter: (filter: GetProductsRequest) => set({ filter }),
}));

export const useProductStore = () => {
  const filter = useZustandProduct((state) => state.filter);
  const productResponse = useGetProducts(filter);

  return {
    productResponse,
  };
};
