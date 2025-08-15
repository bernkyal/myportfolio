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
          title="Employee Attrition Prediction & Retention System"
          description="Predicts which employees are at risk of leaving using ML, and automate alerts."
          authorName="1"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="Logistics Incident Reporting & Analysis App"
          description="Enable drivers/logistics teams to log delivery incidents via a mobile app, analyze patterns, and automate incident handling."
          authorName="2"
          ></ProjectCard>
          </GridItem>

          <GridItem>
          <ProjectCard
          title="Expense Fraud Detection & Reporting App"
          description="Employees submit expenses through an app; ML model detects possible fraud and flags suspicious claims."
          authorName="3"
          ></ProjectCard>
          </GridItem>
          
        </Grid>
        </Box>
    </>
  )
}
