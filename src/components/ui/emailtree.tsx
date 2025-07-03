import {Grid, VStack, HStack} from "@chakra-ui/react"

export function EmailTree() {
  return (
    <>
    <Grid className="emailtree" position="fixed" h="100vh" w="20%" placeItems="center">
      <HStack position="center" >
        <VStack fontSize="20px">
        <p><b>bernardkya@gmail.com</b></p>
        </VStack>    
      </HStack>
    </Grid>            
    </>
  )
}
