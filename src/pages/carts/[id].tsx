import { VStack } from "@chakra-ui/react";
import { CartDetail } from "src/uikit/containers/carts/CartDetail";
import { CartProductsTable } from "src/uikit/containers/carts/CartProductsTable";

const CartDetailPage = () => {
  return (
    <VStack align="start" spacing={{ base: "2rem", md: "5rem" }}>
      <CartDetail />
      <CartProductsTable />
    </VStack>
  );
};

export default CartDetailPage;
