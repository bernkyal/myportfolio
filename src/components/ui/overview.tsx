import {Flex, Grid, Separator, Stack, Badge} from "@chakra-ui/react"


export function Overview() {
  return (
    <>
        <Grid h="80vh">
        <div id="about">            
        <Flex direction={"column"} gap="4" textAlign="left" p="8">
        <div className="title"><h1>About me</h1><Separator borderColor="white" w="50%"></Separator></div>
        <Grid w="70%" gap={"4"}>
        <div>I am a aspiring Data Scientist passionate about creating tangiable impacts based on our information. I am specializing in data analytics, currently finishing my <a style={{color: "yellow", textDecoration: "underline"}} href="https://www.coursera.org/professional-certificates/google-advanced-data-analytics">Advanced Data Analytics Google Certification</a> and Computer Science (Bsc) degree. I strongly believe understanding our data is more criticial in creating a better future.</div>
        <div></div>
        </Grid>
        
        
        <Stack direction="row">
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
