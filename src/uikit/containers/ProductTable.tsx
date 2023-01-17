import { useMemo } from "react";
import { Table } from "../components/Table";
import type { Column } from "react-table";
import { useProductStore } from "src/modules/products/productStore";
import { Text } from "@chakra-ui/react";

interface TableData {
  productName: string;
  brand: string;
  price: number;
  stock: number;
  category: string;
}

export const ProductTable = () => {
  const {
    productResponse: { data, isLoading },
  } = useProductStore();

  const columns = useMemo((): Array<Column<TableData>> => {
    return [
      {
        Header: "Product Name",
        accessor: "productName",
      },
      {
        Header: "Brand",
        accessor: "brand",
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
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Category",
        accessor: "category",
      },
    ];
  }, []);

  const tableData = useMemo((): Array<TableData> => {
    if (data) {
      return data.products.map((product) => ({
        brand: product.brand,
        category: product.category,
        price: product.price,
        productName: product.title,
        stock: product.stock,
      }));
    }

    return [];
  }, [data]);

  return (
    <Table<TableData>
      columns={columns}
      data={tableData}
      isLoading={isLoading}
    />
  );
};
