import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { QueryProvider } from "src/providers/QueryProvider";
import { WithSidebar } from "src/uikit/containers/global/WithSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryProvider>
        <WithSidebar>
          <Component {...pageProps} />
        </WithSidebar>
      </QueryProvider>
    </ChakraProvider>
  );
}

export default MyApp;
