import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function WithBackgroundImage({ imgLink }: any) {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      brightness="40%"
      background={`url(${imgLink})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Navbar />

        <Stack
          maxW={"2xl"}
          align={"flex-center"}
          justifyContent="center"
          justify={"center"}
          spacing={6}
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontFamily={""}
            mx="auto"
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Relative Produções
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              mx="auto"
            >
              Mostre mais
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
