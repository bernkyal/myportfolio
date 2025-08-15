import {Flex, Grid, Separator, Stack, Badge} from "@chakra-ui/react"


export function Overview() {
  return (
    <>
        <Grid mb="16vh">
        <div id="about">            
        <Flex direction={"column"} gap="4" textAlign="left" p="4">
        <div className="title"><h1>About me</h1><Separator borderColor="white" w="50%"></Separator></div>
        <Grid w="70%" gap={"4"}>
        <div>As an eager Data Scientist, I am specializing currently finishing my <a style={{color: "yellow", textDecoration: "underline"}} href="https://www.coursera.org/professional-certificates/google-advanced-data-analytics">Advanced Data Analytics Google Certification</a> and Computer Science (Bsc) degree. I strongly believe understanding our data is more criticial in creating a better future. I'm looking to apply my knowledge to a variety of new contexts. Outside of data science, I've developed strong skills within full stack web development, and game development as a way of engaging with computer science within a wide scope. These experiences help me be creative in the work I do throughout my work.</div>
        <div></div>
        </Grid>
        
        
        <Stack direction="row" flex-wrap="wrap" maxW="10px">
        <Badge colorPalette="cyan" size="lg" variant="surface">Predicted: 1:1</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">Data Scientist</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">Enjoys Collaboration</Badge>
        <Badge colorPalette="cyan" size="lg" variant="surface">Experienced in Leadership</Badge>

        </Stack>
        
        </Flex>
        </div>
        </Grid>
    </>
  )
}
