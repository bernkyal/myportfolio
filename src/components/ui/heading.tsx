import {Flex, Grid, Button, Link, Separator} from "@chakra-ui/react"

export function Heading() {
  return (
    <>
        <Grid mb="16vh" mt="16vh">
        <div>            
          
        <Flex direction={"column"} gap="4" textAlign="left" p="4">
      
        <div>
          <div><p>Hi, my name is</p></div>
       
          <text className="handwritten-text">
            <h1>Bernard</h1> 
          </text>
   
        </div>

       
        <div><h1 className="handwritten-text">Welcome To My Porfolio Page</h1></div>
        <Separator borderColor="white" w="50%" />
        <Grid w="70%">
          
        <div><b>A Data Science enthusiast, Computer Science student who has a strong passion for machine learning and data analytics. Driven by curiosity, I'm uncovering our data's meaning to better help understand our world. As a proud Workstream Leader within my University, I'm utilizing both my technical expertise and my leadership skills to continuously apply data driven solutions while supporting and collaborating with others.</b> <br/><br/></div>
        
        <div>
        <Flex mt="8" gap="3">
      <Link href="https://bernkyal.github.io/myportfolio/BernardCV.pdf" download>
      <Button variant="outline">Download CV</Button>
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
