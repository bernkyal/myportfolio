import {Grid, Flex, Pagination, ButtonGroup, IconButton, Box, VStack, HStack, Separator, Image, Badge} from "@chakra-ui/react"
import {LuChevronLeft, LuChevronRight} from "react-icons/lu"


export function Projects() {
  return (
    <>
               <Grid h="80vh" gap="4">
                <Box p={4}>
      <Box h="60px" w="100%" textAlign="left"><h1>Projects</h1>
              <Separator w="50%"></Separator></Box>
      <Flex mt={4}>
        <Box flex="1">
          <VStack align="flex-start" gap={2}>
    <Box w="28vw" h="250px"><Image border="1px solid white" borderRadius="8px" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/578211-gettyimages-542930526-aef7b0e9536cbdb1633029d5801c0649.jpg"></Image></Box>
    <Box w="28vw" h="250px" translate={"20px -240px"}><Image border="1px solid white" borderRadius="8px" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/578211-gettyimages-542930526-aef7b0e9536cbdb1633029d5801c0649.jpg"></Image></Box>
    <Box w="28vw" h="250px" translate={"40px -480px"}><Image border="1px solid white" borderRadius="8px" src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/shape/cover/sport/578211-gettyimages-542930526-aef7b0e9536cbdb1633029d5801c0649.jpg"></Image></Box>
 
          <HStack gap={0}  >
    <Pagination.Root count={3} pageSize={1} defaultPage={1} translate={"0px -280px"}>
      <ButtonGroup variant="outline" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton backdropFilter="blur(4px)" color="white" variant={{ base: "outline", _selected: "surface" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  </HStack>
   </VStack>
        </Box>
        <Box flex="2">
          
  <VStack align="flex-start" gap={4} textAlign={"left"} ml="80px">
    <Box w="100%"><h2><b>First Main Project</b></h2></Box>
    <Box w="100%" p="4" borderRadius="4px" border="1px solid black" backdropFilter={"blur(4px)"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem reprehenderit cumque quaerat molestiae blanditiis ipsum dolore ipsam, cum laborum esse repellendus similique a natus ratione sequi beatae sit asperiores?</p></Box>
    <Box w="250px" h="40px" spaceX="4">
      <Badge colorPalette="cyan" size="lg" variant="surface">Python</Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">HTML</Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">CSS</Badge></Box>
  </VStack>
        </Box>
      </Flex>
    </Box>
               </Grid>
    </>
  )
}
