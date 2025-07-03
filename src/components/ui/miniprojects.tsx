import {Grid, GridItem, Box} from "@chakra-ui/react"
import { ProjectCard } from "./projectcards"

export function MiniProjects() {
  return (
    <>
    <Box textAlign={"left"} pb="4vh">
       <h1>Other Stuff I Am Working On</h1>
      </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
           

          <GridItem>
          <ProjectCard
          title="New Project 1"
          description="Hello World"
          image="https://picsum.photos/seed/ai/200/300"
          authorName="First Project"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="New Project 2"
          description="Hello World"
          image="https://picsum.photos/seed/ai/200/300"
          authorName="First Project"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="New Project 3"
          description="Hello World"
          image="https://picsum.photos/seed/ai/200/300"
          authorName="First Project"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="New Project 4"
          description="Hello World"
          image="https://picsum.photos/seed/ai/200/300"
          authorName="First Project"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="New Project 5"
          description="Hello World"
          image="https://picsum.photos/seed/ai/200/300"
          authorName="First Project"
          ></ProjectCard>
          </GridItem>
          
        </Grid>
    </>
  )
}
