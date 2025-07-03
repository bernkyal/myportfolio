import {Grid, VStack, HStack, Box, GridItem, Center} from "@chakra-ui/react"
import { HiOutlineFolder } from "react-icons/hi"

export function LinkTree() {
  return (
    <>
    <Grid className="linktree" position="fixed" h="100vh" w="20%" placeItems="center">
      <HStack position="center" >
        <VStack>
        <HiOutlineFolder size="40px"/>
        <HiOutlineFolder size="40px"/>  
        <HiOutlineFolder size="40px"/>
        <HiOutlineFolder size="40px"/>
        <HiOutlineFolder size="40px"/>
        </VStack>    
      </HStack>
    </Grid>            
    </>
  )
}
