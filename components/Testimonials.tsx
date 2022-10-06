import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function WithLargeQuote() {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
    </Stack>
  );
}
