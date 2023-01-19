import { ChakraProvider } from "@chakra-ui/react";

import theme from "../config/theme";
import { AppProps } from "next/app";
import { QueryProvider } from "src/providers/QueryProvider";
import { WithSidebar } from "src/uikit/containers/global/WithSidebar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryProvider>
        <Head>
          <title>Deall Admin</title>
        </Head>
        <WithSidebar>
          <Component {...pageProps} />
        </WithSidebar>
      </QueryProvider>
    </ChakraProvider>
  );
}

export default MyApp;
