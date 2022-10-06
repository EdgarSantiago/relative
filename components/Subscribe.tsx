import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Simple() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Flex minH={"100%"} py="100px" align={"center"} justify={"center"}>
      <Container maxW={"1000px"} rounded={"lg"} p={6} flexDirection={"column"}>
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "6xl" }}
          textAlign={"center"}
          mb={"60px"}
        >
          Explain your vision with words and watch it come to life!
        </Heading>
        <Stack
          px="200px"
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              p="25px"
              variant={"solid"}
              borderWidth={1}
              borderRadius="2000px"
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Seu Email"}
              aria-label={"Seu Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              p="25px"
              borderRadius="2000px"
              colorScheme={state === "success" ? "green" : "gray"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "button"}
            >
              {state === "success" ? <CheckIcon /> : "Enviar"}
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}
