import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useGetCartById } from "src/modules/carts/cartHooks";
import { Loader } from "../global/Loader";

type PageQuery = {
  id: string;
};

export const CartDetail = () => {
  const { query } = useRouter();
  const { id } = query as PageQuery;
  const { data, isLoading } = useGetCartById({ id: +id }, { enabled: !!id });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box w="100%">
      <Text>Cart {data?.id}</Text>
      <Text>Details</Text>
      <SimpleGrid columns={2} w="100%">
        <Text>User: {data?.userName}</Text>
        <Text># of items: {data?.totalProducts}</Text>
        <Text>Added on: {dayjs().format("DD MMM YYYY")}</Text>
        <Text>Total amount: {data?.total}</Text>
      </SimpleGrid>
    </Box>
  );
};
