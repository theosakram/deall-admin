import { Product } from "../products/productType";

export interface Cart {
  discountedTotal: number;
  id: number;
  products: Array<Product>;
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: 97;
}

export interface CartWithUsername extends Cart {
  userName: string;
}

export interface GetCartsResponse {
  carts: Array<Cart>;
  limit: number;
  skip: number;
  total: number;
}

export interface GetCartByIdRequest {
  id: number;
}
