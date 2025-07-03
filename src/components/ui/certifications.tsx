import {Flex, Grid} from "@chakra-ui/react"


export function Certifications() {
  return (
    <>
        <Grid>
        <div>            
        <Flex direction={"column"} gap="3" textAlign="left" p="10">
        <div><h3><b>Certificates</b></h3></div>
        <li>Google Data Analytics Advanced Certification</li>
        <li>Microsoft PL-900 Certification</li>
        </Flex>
        </div>
        </Grid>
    </>
  )
}
