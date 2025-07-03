import {Flex, Grid, Button, Link} from "@chakra-ui/react"


export function Heading() {
  return (
    <>
        <Grid h="100vh" mt="25vh">
        <div>            
          
        <Flex direction={"column"} gap="4" textAlign="left" p="8">
      
        <div>
          <div><p>Hi, my name is</p></div>
       
          <text className="handwritten-text">
            <h1>Bernard</h1> 
          </text>
   
        </div>

       
        <div><h1 className="handwritten-text">Welcome To My Porfolio Page</h1></div>
        <Grid w="50%">
        <div><b>Here you can explore what I have made and get to know me more.</b> <br/><br/></div>
        
        <div>
        <Flex mt="8" gap="3">
        {/* <Button variant={"outline"}>Learn More</Button> */}

      <Link href="src\assets\Bernard CV.pdf">
      <Button variant="outline">Learn More</Button>
      </Link>


        </Flex>
        </div>
        </Grid>
        </Flex>
        </div>
        </Grid>
    </>
  )
}
