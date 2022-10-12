import type { NextPage } from "next";
import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
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

const Home: NextPage = () => {
  return (
    <Layout title="Início" img="https://wallpapercave.com/wp/wp7099560.jpg">
      <Subscribe />
      <Container maxW={"1000px"} rounded={"lg"} p={6} flexDirection={"column"}>
        <Box minH={"100%"} py="150px">
          <Heading fontSize={["5xl", "7xl"]} mb={4}>
            RELATIVE
          </Heading>
          <Heading>
            Ser relativo não é um estado, é uma ação.
            <br />
            É muito mais do que ser algo, é saber ser vários.
            <br />
            <br /> A opinião, o clima, o sentimento, a crença.
            <br /> A força por trás de todas essas coisas não está no que de
            fato elas são.
            <br />
            <br /> Mas sim nas várias bagagens que são carregadas junto com
            elas.
          </Heading>
        </Box>

        <Box minH={"100%"} py="150px" textAlign={"end"}>
          <Heading fontSize={["5xl", "7xl"]} mb={4}>
            RELATIVE
          </Heading>
          <Heading>
            Ser relativo não é a situação presente, mas se presentear em todas
            as situações. Seja positivo ou negativo (e isso é relativo), um
            momento brota ideias. E são essas ideias que nos fazem seguir, seja
            qual for o sentido. Relaxe, releve, reflita, rebata, reaja,
            ressurja, revolucione. Relative.
          </Heading>
        </Box>

        <Box minH={"100%"} py="150px" textAlign={"start"}>
          <Heading fontSize={["5xl", "7xl"]} mb={4}>
            RELATIVIDADE
          </Heading>
          <Heading>
            A energia de quem corre.
            <br />
            A paciência de quem briga.
            <br />
            O refúgio de quem mente.
            <br />
            A piada de quem chora.
            <br />
            A euforia de quem celebra.
            <br />
            A meta de quem luta. O abraço de quem sofre.
            <br />
            O calor de quem se entrega.
            <br />
          </Heading>
        </Box>

        <Box minH={"100%"} py="150px" textAlign={"end"}>
          <Heading fontSize={["5xl", "7xl"]} mb={4}>
            RELATIVIDADE
          </Heading>
          <Heading>
            Esdras de Lucia é o artista que lidera a banda Relative.
            <br />
            <br />
            Com verdade e ternura, Esdras trafega com leveza entre os mundos da
            música e da ideologia. Assim como as emoções, relativas a cada um, o
            versátil álbum de Relative carrega estilos e pegadas únicos para
            cada uma de suas canções.
            <br />
            <br />
            O denominador comum de todas as músicas se encontra exatamente no
            que Esdras deseja para o mundo: inspiração, auto estima, empatia e,
            acima de tudo, respeito.
            <br />
            <br />
            Mate constantemente a sua curiosidade por Relative, pois cada vez
            que se ouve suas canções, novas conexões podem se formar dentro de
            você.
          </Heading>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
