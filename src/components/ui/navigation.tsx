import {Button, Grid, GridItem, Link} from "@chakra-ui/react"

export function Navigation() {
  return (
    <>
        <Grid className="navigation" pr="3vw" pl="3vw" pt="2vh" pb="2vh"  gap="10" templateColumns="repeat(3, 1fr)" zIndex={1}>

          
          <GridItem>
          <Link href="#">
          <Button variant={"outline"}>Home</Button>
          </Link>
          </GridItem>

          <GridItem>
          <Link href="#about">
          <Button variant={"outline"}>About</Button>
          </Link>
          </GridItem>

          {/* <GridItem>
          <Button variant={"outline"}>Experience</Button>
          </GridItem>

          <GridItem>
          <Button variant={"outline"}>Projects</Button>
          </GridItem>

          <GridItem>
          <Button variant={"outline"}>Certifications</Button>
          </GridItem> */}

          <GridItem>
          <Link href="myportfolio\src\assets\Bernard CV.pdf">
                <Button variant="outline">CV</Button>
          </Link>
          </GridItem>
        

        </Grid>
    </>
  )
}
