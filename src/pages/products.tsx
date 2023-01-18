import { Box } from "@chakra-ui/react";
import { ProductChart } from "src/uikit/containers/products/ProductChart";
import { ProductFilter } from "src/uikit/containers/products/ProductFilter";
import { ProductPagination } from "src/uikit/containers/products/ProductPagination";
import { ProductTable } from "src/uikit/containers/products/ProductTable";

const ProductPage = () => {
  return (
    <Box pt="3rem">
      <ProductFilter />
      <ProductTable />
      <ProductPagination />
      <ProductChart />
    </Box>
  );
};

export default ProductPage;
