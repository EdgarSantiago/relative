import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Layout from "../components/Layout";

const Consultoria: NextPage = () => {
  return (
    <Layout
      title="Início"
      img="https://cdn.discordapp.com/attachments/715536557460947014/1029808149428973568/povos3.jpg"
    >
      <Subscribe />
    </Layout>
  );
};

export default Consultoria;
