import {Grid, GridItem, Box} from "@chakra-ui/react"
import { ProjectCard } from "./projectcards"

export function MiniProjects() {
  return (
    <>
    <Box pb="40vh">
    <Box textAlign={"left"} pb="4vh">
       <h1>Other Stuff I Am Working On</h1>
      </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
           

          <GridItem>
          <ProjectCard
          title="Financial Investment Tool"
          description="Support new investors with deciding where and how they should allocate their resources"
          authorName="1"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="SEC Financial Report"
          description="Organizing through SEC Financial Data for benchmarking, insights spanning, competitive benchmarking, growth signals, financial assessment risk and investment scouting"
          authorName="2"
          ></ProjectCard>
          </GridItem>
          
        </Grid>
        </Box>
    </>
  )
}
