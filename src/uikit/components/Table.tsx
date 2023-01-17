import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Center,
  Spinner,
  Table as ChakraTable,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { Column } from "react-table";
import { useTable } from "react-table";
import { matchPI } from "src/shared/adt";

export interface BaseTableProps<T extends object> {
  columns: Array<Column<T>>;
  data: Array<T>;
  isLoading?: boolean;
  wrapperProps?: BoxProps;
}

export const Table = <T extends object>({
  columns,
  data,
  isLoading,
  wrapperProps,
}: BaseTableProps<T>) => {
  const tableInstance = useTable<T>({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const matchState = (): "loading" | "empty" | "data" => {
    if (isLoading) {
      return "loading";
    }

    if (!data.length) {
      return "empty";
    }

    return "data";
  };

  return (
    <Box w="100%" p={wrapperProps?.p || "1rem"} {...wrapperProps}>
      {matchPI({ _tag: matchState() })({
        loading: () => (
          <Center w="100%" h="10rem">
            <Spinner />
          </Center>
        ),
        data: () => (
          <ChakraTable
            {...getTableProps()}
            variant="striped"
            colorScheme="blackAlpha"
            size="sm"
          >
            <Thead bg="gray.800">
              {headerGroups.map((headerGroup, i) => (
                <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, j) => (
                    <Th
                      {...column.getHeaderProps()}
                      key={j}
                      color="white"
                      textTransform="capitalize"
                    >
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {rows.map((row, k) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} key={k}>
                    {row.cells.map((cell, l) => {
                      return (
                        <Td {...cell.getCellProps()} key={l}>
                          {cell.render("Cell")}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </ChakraTable>
        ),
        _: () => (
          <Center w="100%" h="10rem">
            <Text>There are no data to show</Text>
          </Center>
        ),
      })}
    </Box>
  );
};
