import {
  filter,
  Flex,
  Spacer,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  CloseButton,
  FormHelperText,
  FormLabel,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useGetCategories } from "src/modules/products/productHooks";
import { useZustandProduct } from "src/modules/products/productStore";
import { useStoreSelector } from "src/shared/hooks";

interface FormValue {
  search: string;
}

export const ProductFilter = () => {
  const { data } = useGetCategories();
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
    <Flex w="100%">
      <Spacer />
      <HStack pr="1rem">
        <FormControl w="15rem">
          <Select
            bg="white"
            placeholder="Filter by category"
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            {data?.map((datum, i) => (
              <option value={datum} key={i}>
                {datum}
              </option>
            ))}
          </Select>
        </FormControl>

        <form
          onSubmit={handleSubmit((e) => {
            return setFilter({ ...filter, search: e.search, category: "" });
          })}
        >
          <FormControl w="15rem">
            <InputGroup>
              <Input
                bg="white"
                placeholder="Search product by name"
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
        </form>
      </HStack>
    </Flex>
  );
};
