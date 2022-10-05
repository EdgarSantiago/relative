import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
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

const Home: NextPage = () => {
  return (
    <Layout title="Início">
      <div>
        <div>
          <main>
            <Section />
            <div>
              <section>
                <Features />
                <Blog />
                <Testimonials />
              </section>
            </div>
          </main>
          <Subscribe />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
