import {Flex, HStack, Card, VStack, Text, Box, Grid, GridItem, Separator, Timeline} from "@chakra-ui/react"
// import { useState } from "react"

export function WorkExp() {

  // const [selectedIndex, setSelectedIndex] = useState(1);

  // const workData = [
  //   {
  //     company: "ExamApp",
  //     title: "Frontend Developer",
  //     duration: "Jan 2022 – Present",
  //     details: [
  //       "Developed student UI and exam dashboard.",
  //       "Integrated timer and live feedback systems.",
  //       "Improved performance by 30% using code-splitting.",
  //     ],
  //   },
  //   {
  //     company: "RICOH",
  //     title: "Group IT Intern",
  //     duration: "May 2018 – Sep 2018",
  //     details: [
  //       "Deployed and configured 100s of devices.",
  //       "Managed asset inventory across multiple regions.",
  //       "Collaborated with international service desk teams.",
  //     ],
  //   },
  //   {
  //     company: "Guy's & St Thomas' Hospital",
  //     title: "Clinical Systems Assistant",
  //     duration: "2020 – 2021",
  //     details: [
  //       "Supported Epic rollout and training.",
  //       "Handled service tickets and medical data integrity.",
  //       "Collaborated with clinicians and IT teams.",
  //     ],
  //   },
  //   {
  //     company: "University of Leicester Student Union",
  //     title: "IT Support Assistant",
  //     duration: "2017 – 2018",
  //     details: [
  //       "Supported internal networks and printers.",
  //       "Provided helpdesk support for staff and students.",
  //       "Maintained A/V systems during events.",
  //     ],
  //   },
  // ];

  return (
    <>
    <Grid
      templateRows="80px 1fr"
      templateColumns="300px 1fr"
      h="100%"
      w="60vw"
      gap={4}
      p={4}
    >
      {/* Header */}
      <GridItem colSpan={2} textAlign={"left"}>
        <h1>Work Experience</h1>
        <Separator borderColor="white" w="50%"></Separator>
      </GridItem>

      {/* Sidebar */}
      <GridItem textAlign="left">
          <Timeline.Root>
            
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator backgroundColor={"#dbe8ff"}>1</Timeline.Indicator>
    </Timeline.Connector> 
    <Timeline.Content>

      <Card.Root className="experience" size="sm">
        
        <Card.Body><Timeline.Description color="#fff">
          <HStack>
          <VStack>
            <Text><b>ExamApp</b></Text>
          </VStack>
          </HStack>
          
          </Timeline.Description></Card.Body>
      </Card.Root>

    </Timeline.Content>
  </Timeline.Item>
    <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator backgroundColor={"#dbe8ff"}>2</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>

     <Card.Root className="experience" size="sm">
        
        <Card.Body><Timeline.Description color="#fff">
          <HStack>
          <VStack>
            <Text><b>RICOH</b></Text>
          </VStack>
          </HStack>
          
          </Timeline.Description></Card.Body>
      </Card.Root>

    </Timeline.Content>
  </Timeline.Item>
    <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator backgroundColor={"#dbe8ff"}>3</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>

      <Card.Root className="experience" size="sm">
        
        <Card.Body><Timeline.Description color="#fff">
          <HStack>


          <VStack>
            <Text><b>Guy's & St Thomas' Hospital</b></Text>
          </VStack>
          </HStack>
          
          </Timeline.Description></Card.Body>
      </Card.Root>

    </Timeline.Content>
  </Timeline.Item>
    <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator backgroundColor={"#dbe8ff"}>4</Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>

      <Card.Root className="experience" size="sm">
        
        <Card.Body><Timeline.Description color="#fff">
          <HStack>
          <VStack>
            <Text><b>University of Leicester Student Union</b></Text>
          </VStack>
          </HStack>
          
          </Timeline.Description></Card.Body>
      </Card.Root>

    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>
      </GridItem>

      {/* Main Content */}
      <GridItem textAlign={"left"}>
        <Flex direction="column" h="100%">
          {/* Top Box */}
          <Box direction="column" mb="4">
          <h3><b>RICOH</b> - Group IT Intern</h3><p>May 2018 - Sep 2018</p>
          </Box>

          {/* Bottom Box */}
          <Box flex="1" textAlign={"left"} > 
          <p>-	Delivered technology support such as deploying new and existing equipment, installed and configured software on 100s of devices. 
<br></br>-	Maintained software and hardware asset inventory consisting of 1000s of devices from several countries, protecting GDPR rules.
<br></br>-	Collaborated with local and international service desk teams to follow up on incidences in service and internal management systems
</p>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
    </>
  )
}


