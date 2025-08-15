import {Button, Grid, GridItem, Link} from "@chakra-ui/react"

export function Navigation() {
  return (
    <>
        <Grid className="navigation" pr="3vw" pl="3vw" pt="2vh" pb="2vh"  gap="10" templateColumns="repeat(4, 1fr)" zIndex={1}>

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

          <GridItem>
            <Link href="#projects">
          <Button variant={"outline"}>Projects</Button>
          </Link>
          </GridItem>

          <GridItem>
          <Link href="#experience">
          <Button variant={"outline"}>Experience</Button>
          </Link>
          </GridItem>

          

          {/* <GridItem>
          <Button variant={"outline"}>Certifications</Button>
          </GridItem> */}


        </Grid>
    </>
  )
}
