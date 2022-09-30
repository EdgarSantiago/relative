// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Chakra from "../components/chakra/chakra";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra>
      <Component {...pageProps} key={router.route} />
    </Chakra>
  );
}

export default MyApp;
