import {Heading} from './ui/heading'
import {Box, Grid, GridItem, VStack, Stack} from "@chakra-ui/react"
import {Navigation} from './ui/navigation'
import {WorkExp} from './ui/workexp'
import {Skills} from './ui/skills'
import {Projects} from './ui/projects'
import {Overview} from './ui/overview'
import {LinkTree} from './ui/linktree'
import {EmailTree} from './ui/emailtree'
import {MiniProjects} from './ui/miniprojects'

export function Layout() {
  return (
    <>
    <Navigation></Navigation>
    <Grid templateColumns="repeat(10, 1fr)" gap={4}>

  <GridItem colSpan={2}>
    <Box>
      <LinkTree />
    </Box>
  </GridItem>

  <GridItem colSpan={6}>
    <Box>

      <Stack spaceY={8}>
      <Heading/>

      <Box mb="4">
      <Overview />
      </Box>
      
       <VStack>
        <Box mb="4">
        <Projects />
        </Box>
      </VStack>

      <Skills />

        <Box mb="4">
      <WorkExp />
      </Box>


      <Box mb="4">
        <MiniProjects />
      </Box>
       </Stack>
       
       


       
    </Box>

   
  </GridItem>

  <GridItem colSpan={2}>
    <Box>
      <EmailTree />
    </Box>
  </GridItem>

</Grid>

<Box color="yellow" pb="10vh">
<p>Thank you for visiting!</p>
<p>This website written & developed by Bernard in React</p>
</Box>

    </>
  )
}

export default Layout