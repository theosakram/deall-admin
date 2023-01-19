import { useMemo } from "react";
import type { Column } from "react-table";
import { Box, Text } from "@chakra-ui/react";
import { Table } from "src/uikit/components/Table";
import { useCartStore } from "src/modules/carts/cartStore";

interface TableData {
  productName: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
}

export const CartProductsTable = () => {
  const {
    cartByIdResponse: { data, isLoading },
  } = useCartStore();

  const columns = useMemo((): Array<Column<TableData>> => {
    return [
      {
        Header: "Product Name",
        accessor: "productName",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: ({ value }) => {
          return (
            <Text>
              {value?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
          );
        },
      },
      {
        Header: "Discounted Price",
        accessor: "discountedPrice",
        Cell: ({ value }) => {
          return (
            <Text>
              {value?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
          );
        },
      },
      {
        Header: "Discount Percentage",
        accessor: "discountPercentage",
      },
    ];
  }, []);

  const tableData = useMemo((): Array<TableData> => {
    if (data) {
      return data.products.map((product) => ({
        price: product.price,
        productName: product.title,
        discountedPrice: product.discountedPrice,
        discountPercentage: product.discountPercentage,
      }));
    }

    return [];
  }, [data]);

  return (
    <Box w="100%" overflow="auto">
      <Table<TableData>
        columns={columns}
        data={tableData}
        isLoading={isLoading}
      />
    </Box>
  );
};
