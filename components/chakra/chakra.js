import { GetServerSideProps } from "next";
import React, { ReactNode } from "react";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

import theme from "../lib/theme";

export default function Chakra({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
