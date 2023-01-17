import { UseBoundStore, StoreApi } from "zustand";
import { shallow } from "zustand/shallow";

// only for when selecting 2 or more state
export const useStoreSelector = <T extends object, U>(
  store: UseBoundStore<StoreApi<T>>,
  selector: (param: T) => U
) => {
  return store(selector, shallow);
};
