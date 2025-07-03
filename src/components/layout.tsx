import {Heading} from './ui/heading'
import {Box, Grid, GridItem} from "@chakra-ui/react"
import {Navigation} from './ui/navigation'
// import {WorkExp} from './ui/workexp'
// import {Skills} from './ui/skills'
// import {Projects} from './ui/projects'
import {Overview} from './ui/overview'
import {LinkTree} from './ui/linktree'
import {EmailTree} from './ui/emailtree'
// import {MiniProjects} from './ui/miniprojects'

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
      <Heading />
      <Overview />


      {/* <WorkExp />
      <Skills />
      <Box mb="40vh">
        <Projects />
        <Projects />
      </Box>
      <Box mb="40vh">
        <MiniProjects />
      </Box> */}
    </Box>
  </GridItem>

  <GridItem colSpan={2}>
    <Box>
      <EmailTree />
    </Box>
  </GridItem>

</Grid>

    </>
  )
}

export default Layout