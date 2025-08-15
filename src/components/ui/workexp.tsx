import { Flex, HStack, Card, VStack, Text, Box, Grid, GridItem, Separator, Timeline } from "@chakra-ui/react";
import { useState } from "react";


export function WorkExp() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const workData = [
    {
      company: "Waitrose",
      title: "Operations and Customer Assistant",
      duration: "2024 – Present",
      details: [
        "Resolved customer queries respectfully, maintained standards across the store and cleanliness.",
        "Effectively worked alongside team members to ensure deadlines work deadlines were met",
        "Communicated with delivery drivers and phone-ins from clients to ensure external providers were satisfied responsive",
        "Logged and fielded inquires on stock count to ensure deliveries were relevant to customer demands.",
        "Calmly handled timed condition processing 100s of items for deliveries.",
        "Cooked and packaged a series of hot food bakery items for customers.",
      ],
    },
     {
      company: "University of Leicester",
      title: "Workstream Lead & Student Advisor",
      duration: "2025 – Present",
      details: [
        "Coagulated, presented and implemented changes based on student research gathered to support and improve student experiences of 100s of students across campus and accommodation",
        "Organized and planned feedback groups with students to base",
        "Analysed university feedback on data to best inform change within the university",
      ],
    },
   
    {
      company: "RICOH",
      title: "Group IT Intern",
      duration: "May 2018 – Sep 2018",
      details: [
        "Delivered technology support such as deploying new and existing equipment, installed and configured software on 100s of devices.",
        "Maintained software and hardware asset inventory consisting of 1000s of devices from several countries, protecting GDPR rules.",
        "Collaborated with local and international service desk teams to follow up on incidences in service and internal management systems",
      ],
    },
    {
      company: "Guy's & St Thomas' Hospital",
      title: "Clinical Systems Assistant",
      duration: "2020 – 2021",
      details: [
        "Supported Epic rollout and training.",
        "Handled service tickets and medical data integrity.",
        "Collaborated with clinicians and IT teams.",
      ],
    },
     {
      company: "ExamApp",
      title: "Edutech Consultant",
      duration: "Oct 2024 – Jan 2025",
      details: [
        "Ability to analyse educational data and metrics to inform technology strategies and instructional improvements from creating, customizing, and managing LMS platforms ",
        "Exercised proficiency in Microsoft Office 365 Tools such as Word, PowerPoint and Excel",
      ],
    },
  ];

  const selectedWork = workData[selectedIndex];

  return (
    <Grid
      templateColumns="220px 1fr"
      w="60vw"
      mb="16vh"
      gap={4}
      p={4}
      id="experience"
    >
      {/* Header */}
      <GridItem colSpan={2} textAlign="left">
        <h1>Work Experience</h1>
        <Separator borderColor="white" w="50%" />
      </GridItem>

      {/* Sidebar */}
      <GridItem textAlign="left">
        <Timeline.Root>
          {workData.map((work, index) => (
            <Timeline.Item key={index}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator
                  backgroundColor={selectedIndex === index ? "#4e73ff" : "#dbe8ff"}
                  color={selectedIndex === index ? "white" : "black"}
                >
                  {index + 1}
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Card.Root
                  className="experience"
                  size="sm"
                  cursor="pointer"
                  border={selectedIndex === index ? "2px solid #4e73ff" : "2px solid transparent"}
                  _hover={{ border: "2px solid #4e73ff" }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Card.Body>
                    <Timeline.Description color="#fff">
                      <HStack>
                        <VStack>
                          <Text fontWeight="bold">{work.company}</Text>
                        </VStack>
                      </HStack>
                    </Timeline.Description>
                  </Card.Body>
                </Card.Root>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline.Root>
      </GridItem>

      {/* Main Content */}
      <GridItem textAlign="left">
        <Flex direction="column" h="100%">
          {/* Top Box */}
          <Box mb="4">
            <h3>
              <b>{selectedWork.company}</b> - {selectedWork.title}
            </h3>
            <p>{selectedWork.duration}</p>
          </Box>

          {/* Bottom Box */}
          <Box flex="1">
            {selectedWork.details.map((detail, i) => (
              <p key={i}>- {detail}</p>
            ))}
          </Box>
        </Flex>
      </GridItem>

      <Box color="#aaa" scale="0.75"><p>click above, see more</p></Box>
    </Grid>

  
  );
}
