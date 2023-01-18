import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useMemo } from "react";
import { Column } from "react-table";
import { useGetCarts } from "src/modules/carts/cartHooks";
import { Table } from "src/uikit/components/Table";

interface TableData {
  userId: number;
  totalProducts: number;
  totalQuantity: number;
  totalDiscounted: number;
  id: number;
}

export const CartsTable = () => {
  const { data, isLoading } = useGetCarts();

  const columns = useMemo((): Array<Column<TableData>> => {
    if (data) {
      return [
        {
          Header: "User ID",
          accessor: "userId",
        },
        {
          Header: "Total Products",
          accessor: "totalProducts",
        },
        {
          Header: "Quantity",
          accessor: "totalQuantity",
        },
        {
          Header: "Discounted Total",
          accessor: "totalDiscounted",
        },
        {
          Header: "To Detail",
          accessor: "id",
          Cell: ({ value }) => {
            return (
              <Link
                href={{
                  pathname: "/cart/[id]",
                  query: { id: String(value) },
                }}
                passHref
              >
                <Button colorScheme="blue">Detail</Button>
              </Link>
            );
          },
        },
      ];
    }

    return [];
  }, [data]);

  const tableData = useMemo((): Array<TableData> => {
    if (data) {
      return data.carts.map((cart) => ({
        totalProducts: cart.totalProducts,
        totalQuantity: cart.totalQuantity,
        userId: cart.userId,
        id: cart.id,
        totalDiscounted: cart.discountedTotal,
      }));
    }

    return [];
  }, [data]);

  return <Table data={tableData} columns={columns} isLoading={isLoading} />;
};
