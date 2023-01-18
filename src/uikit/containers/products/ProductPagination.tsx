import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { Flex, Show, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useProductStore } from "src/modules/products/productStore";

type PagesQuery = {
  page: string;
};

export const ProductPagination = () => {
  const { query, push } = useRouter();
  const { page } = query as PagesQuery;
  const {
    productResponse: { data },
  } = useProductStore();

  const { pagesCount, pages, setCurrentPage } = usePagination({
    pagesCount: data?.total / data?.limit || 0,
    initialState: { currentPage: page ? +page : 1 },
    limits: {
      outer: 1,
      inner: 2,
    },
  });

  const shallowPush = (page: number) => {
    return push({ pathname: "products", query: { page } }, undefined, {
      shallow: true,
    });
  };

  return (
    <Flex>
      <Show above="md">
        <Spacer />
      </Show>
      <Pagination
        pagesCount={pagesCount}
        currentPage={page ? +page : 1}
        onPageChange={(page) => {
          setCurrentPage(page);
          shallowPush(page);
        }}
      >
        <PaginationContainer>
          <PaginationPrevious>Previous</PaginationPrevious>
          <PaginationPageGroup>
            {pages.map((page: number) => (
              <PaginationPage
                key={`pagination_page_${page}`}
                page={page}
                bg="red.300"
                w={{ base: 5, md: 7 }}
                fontSize="sm"
                _hover={{
                  bg: "green.300",
                }}
                _current={{
                  w: { base: 5, md: 7 },
                  bg: "green.300",
                  fontSize: "sm",
                  _hover: {
                    bg: "blue.300",
                  },
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext>Next</PaginationNext>
        </PaginationContainer>
      </Pagination>
    </Flex>
  );
};
