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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Relative Produções</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <div>
            <Navbar />
            <main>
              <Section />
              <div>
                <section>
                  <br></br>
                  <Features />
                  <br></br>
                  <Blog />
                  <br></br>
                  <Testimonials />
                </section>
              </div>
            </main>
            <Subscribe />
            <Footer />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
