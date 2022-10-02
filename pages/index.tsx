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
<<<<<<< HEAD
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
                <section>yarn
                  <Features />
                  <Blog />
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
=======
    <Layout>
      <Section />
      <Features />
      <Blog />
      <Testimonials />
      <Subscribe />
    </Layout>
>>>>>>> cf1dcf3fe50f823f60d845dd5deb4386b97c6bec
  );
};

export default Home;
