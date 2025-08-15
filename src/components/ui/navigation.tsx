import { Flex, Spacer, Box, Link} from "@chakra-ui/react";

export function Navigation() {
  return (
    <Flex
      className="navigation"
      pr="8vw"
      pl="8vw"
      pt="2vh"
      pb="2vh"
      align="center"
      zIndex={1}

    >
      <Box>
        <Link href="#">Home</Link>
      </Box>

      <Spacer /> 


      <Flex gap="32">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experience">Experience</Link>
      </Flex>
    </Flex>
  );
}

