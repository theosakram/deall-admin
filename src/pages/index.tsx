import {
  Box,
  CloseButton,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useZustandProduct } from "src/modules/products/productStore";
import { useStoreSelector } from "src/shared/hooks";
import { ProductTable } from "src/uikit/containers/ProductTable";

interface FormValue {
  search: string;
}

const Index = () => {
  const [filter, setFilter] = useStoreSelector(useZustandProduct, (state) => [
    state.filter,
    state.setFilter,
  ]);

  const { handleSubmit, register, reset } = useForm<FormValue>({
    defaultValues: {
      search: "",
    },
  });

  return (
    <Box pt="3rem">
      <form
        style={{ width: "100%" }}
        onSubmit={handleSubmit((e) =>
          setFilter({ ...filter, search: e.search })
        )}
      >
        <Flex px="1rem">
          <Spacer />
          <FormControl w="15rem">
            <InputGroup>
              <Input
                bg="white"
                placeholder="Search product"
                type="text"
                border="1px solid"
                borderColor="gray.300"
                {...register("search")}
              />
              {!!filter.search && (
                <InputRightElement>
                  <CloseButton
                    borderRadius="full"
                    onClick={() => {
                      reset();
                      setFilter({ ...filter, search: "" });
                    }}
                  />
                </InputRightElement>
              )}
            </InputGroup>
          </FormControl>
        </Flex>
      </form>

      <ProductTable />
    </Box>
  );
};

export default Index;
