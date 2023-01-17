import { Box } from "@chakra-ui/react";

import { ProductFilter } from "src/uikit/containers/ProductFilter";
import { ProductPagination } from "src/uikit/containers/ProductPagination";
import { ProductTable } from "src/uikit/containers/ProductTable";

const ProductPage = () => {
  return (
    <Box pt="3rem">
      <ProductFilter />
      <ProductTable />
      <ProductPagination />
    </Box>
  );
};

export default ProductPage;
