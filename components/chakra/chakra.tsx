import type { NextApiRequest, NextApiResponse } from "next";
import { GetServerSideProps } from "next";
import React, { ReactNode } from "react";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";

import theme from "../lib/theme";

type Props = {
  children?: ReactNode;
  cookies?: any;
};

export default function Chakra({ cookies, children }: Props) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};
