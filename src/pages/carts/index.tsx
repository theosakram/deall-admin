import { CartPagination } from "src/uikit/containers/carts/CartsPagination";
import { CartsTable } from "src/uikit/containers/carts/CartsTable";

const CartPage = () => {
  return (
    <>
      <CartsTable />
      <CartPagination />
    </>
  );
};

export default CartPage;
