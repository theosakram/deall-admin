import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useGetCarts } from "src/modules/carts/cartHooks";
import { CartCard } from "src/uikit/components/CartCard";
import { Table } from "src/uikit/components/Table";

const CartPage = () => {
  const { data } = useGetCarts();

  return (
    <SimpleGrid w="100%" columns={5} spacing="1rem">
      {data?.carts.map((cart) => (
        <CartCard
          key={cart.id}
          href={{ pathname: "/cart/[id]", query: { id: String(cart.id) } }}
        />
      ))}
    </SimpleGrid>
  );
};

export default CartPage;
