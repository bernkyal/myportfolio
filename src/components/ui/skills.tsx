import {Flex, Grid, Badge} from "@chakra-ui/react"


export function Skills() {
  return (
    <>
        <Grid>
        <div>            
        <Flex direction={"column"} gap="4" textAlign="left" p="4" mb="20vh">
        <div><h3><b>Successful Technical Skills</b></h3></div>
        <Flex wrap="wrap" maxW="70%">

        <Badge colorPalette="purple" size="lg" variant="surface">Python</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">HTML</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">CSS</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">TypeScript</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">SQL</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">Java</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">JavaScript</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">Bash</Badge>
        <Badge colorPalette="purple" size="lg" variant="surface">Power BI</Badge>

        </Flex>
        
        </Flex>
        </div>
        </Grid>
    </>
  )
}
