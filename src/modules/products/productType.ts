export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface GetProductsRequest extends Record<string, unknown> {
  limit: number;
  skip: number;
  select: string;
  search: string;
}

export interface GetProductsResponse {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}
