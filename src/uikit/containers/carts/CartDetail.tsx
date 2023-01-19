import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useCartStore } from "src/modules/carts/cartStore";
import { Loader } from "../global/Loader";

export const CartDetail = () => {
  const {
    cartByIdResponse: { data, isLoading },
  } = useCartStore();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <VStack w="100%" align="start" spacing="5rem">
      <Text fontSize="1.5rem" fontWeight="bold">
        Cart {data?.id}
      </Text>

      <VStack align="start" w="100%">
        <Text fontSize="1.25rem" fontWeight="semibold">
          Details
        </Text>
        <SimpleGrid
          columns={2}
          w="100%"
          p="0.5rem"
          spacing="1rem"
          bg="white"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          borderRadius="0.5rem"
        >
          <Text fontSize={{ base: "14px", md: "1rem" }}>
            User: <Text as="b">{data?.userName}</Text>{" "}
          </Text>
          <Text fontSize={{ base: "14px", md: "1rem" }}>
            # of items: <Text as="b">{data?.totalProducts}</Text>{" "}
          </Text>
          <Text fontSize={{ base: "14px", md: "1rem" }}>
            Added on: <Text as="b">{dayjs().format("DD MMM YYYY")}</Text>{" "}
          </Text>
          <Text fontSize={{ base: "14px", md: "1rem" }}>
            Total amount: <Text as="b">{data?.total}</Text>{" "}
          </Text>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};
