import { useRouter } from "next/router";
import { create } from "zustand";
import { useGetCartById, useGetCarts } from "./cartHooks";
import { GetCartsRequest } from "./cartType";

interface CartStore {
  filter: GetCartsRequest;
  setFilter: (filter: GetCartsRequest) => void;
}

export const useZustandCart = create<CartStore>((set) => ({
  filter: {
    limit: 10,
    skip: 0,
  },
  setFilter: (filter: GetCartsRequest) => set({ filter }),
}));

export const useCartStore = () => {
  const { query } = useRouter();
  const filter = useZustandCart((state) => state.filter);
  const page = query.page ? +query.page : 1;
  const cartResponse = useGetCarts(
    {
      ...filter,
      skip: (page - 1) * filter.limit,
    },
    { onError: (err) => console.log(err) }
  );
  const cartByIdResponse = useGetCartById(
    { id: +query.id },
    { enabled: !!query.id, onError: (err) => console.log(err) }
  );

  return {
    cartResponse,
    cartByIdResponse,
  };
};
