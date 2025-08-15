import {
  Grid,
  Pagination,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  VStack,
  HStack,
  Separator,
  Image,
  Flex,
  Link,
  Badge
} from "@chakra-ui/react";
import type { PaginationItemProps } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Forecast from '../../assets/ModelProjection.png';
import Bakery from '../../assets/SalesInBakery.png';
import MovingAvg from '../../assets/31dayAverage.png';

export function Projects() {
  const projectImages = [
    MovingAvg,
    Bakery,
    Forecast,   
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Grid id="projects" gap="4">
      <Box p={4}>
        <Box w="100%" textAlign="left">
          <h1>Featured Projects</h1>
          <Separator borderColor="white" w="50%" />
        </Box>

        {/* Stack everything vertically */}
        <VStack align="flex-start" spaceY={4} mt={4}>
          {/* Images + Pagination */}
          <VStack align="flex-start" spaceY={2}>
            <Box w="100%"  position="relative" overflow="hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    border="1px solid white"
                    borderRadius="8px"
                    src={projectImages[currentIndex]}
                    w="75%"
                    h="100%"
                    objectFit="cover"
                  />
                </motion.div>
              </AnimatePresence>
            </Box>

            <HStack gap={0}>
              <Pagination.Root
  count={projectImages.length}
  pageSize={1}
  page={currentIndex + 1}
  onPageChange={({page}) => setCurrentIndex(page - 1)}
  mt={4}
>
  <ButtonGroup variant="outline" size="sm">
    {/* Prev Button */}
    <IconButton
      onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))}
      disabled={currentIndex === 0}
      >
      <LuChevronLeft />
    </IconButton>

    {/* Page Number Buttons */}
    <Pagination.Items

      render={(page: PaginationItemProps) => (
        
        <IconButton
          key={page.value}
          backdropFilter="blur(4px)"
          color="white"
          variant={page._current ? "solid" : "outline"}
          onClick={() => setCurrentIndex(page.value - 1)}
        >
          {page.value}
        </IconButton>
      )}
    />

    {/* Next Button */}
    <IconButton
      onClick={() =>
        setCurrentIndex((prev) =>
          prev < projectImages.length - 1 ? prev + 1 : prev
        )
      }
      disabled={currentIndex === projectImages.length - 1}
    >
      <LuChevronRight />
    </IconButton>
  </ButtonGroup>
</Pagination.Root>
            </HStack>
          </VStack>

          {/* Project Info */}
          <Box mt="4vh" w="100%">
            <h2><b>Time Series Sales Forecasting</b></h2>
          </Box>

          <Box
            w="100%"
            p="4"
            borderRadius="4px"
            border="1px solid black"
            backdropFilter={"blur(4px)"}
          >
            <p>
              Within this project, I aimed to use time series forecasting to accurately predict 
              the sales of a store. Through this analysis, I aim to use my findings to best advise
              the business on products to order such that they can maximize sales and minimize 
              wastage. I applied this model to a business case through the use of Power BI by visualizing the model predictions over a 3 month period.
            </p>
          </Box>
          
          {/* Tech Badges */}
          <Flex wrap="wrap" maxW="70%">
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Python
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Power BI
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Pandas
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Numpy
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Matplotlib
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              Sklearn
            </Badge>
            <Badge colorPalette="cyan" size="lg" variant="surface">
              v1.1
            </Badge>
          </Flex>
        </VStack>
        <Box w="100%">
          <Link href="https://github.com/bernkyal/Time-Series-Forecasting-Analysis"><Button variant="outline" color="yellow" borderColor="yellow" fontSize="30px" p="10" mb="4vh"mt="4vh">EXPLORE PROJECT</Button></Link>
          </Box>
      </Box>
    </Grid>
  );
}
