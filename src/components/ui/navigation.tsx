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
        <Link letterSpacing={-1} href="#">Home</Link>
      </Box>

      <Spacer /> 


      <Flex gap="32">
        <Link letterSpacing={-1} href="#about">About</Link>
        <Link letterSpacing={-1} href="#projects">Projects</Link>
        <Link letterSpacing={-1} href="#experience">Experience</Link>
      </Flex>
    </Flex>
  );
}

