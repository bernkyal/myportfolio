import {Flex, Grid, HStack, Badge} from "@chakra-ui/react"


export function Skills() {
  return (
    <>
        <Grid h="80vh">
        <div>            
        <Flex direction={"column"} gap="4" textAlign="left" p="8">
        <div><h3><b>Programming Skills</b></h3></div>
        <HStack>

        <Badge colorPalette="cyan" size="lg" variant="surface">Python</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">HTML</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">CSS</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">TypeScript</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">SQL</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">Java</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">JavaScript</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">Bash</Badge>

        </HStack>
        
        </Flex>
        </div>
        </Grid>
    </>
  )
}
