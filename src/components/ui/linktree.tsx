import {Grid, VStack, HStack, Link} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

export function LinkTree() {
  return (
    <>
    <Grid className="linktree" position="fixed" h="100vh" w="20%" placeItems="center">
      <HStack position="center">
        <VStack spaceY="4">
        <Link href="https://github.com/bernkyal">
        <FaGithub size="40px"/> 
        </Link>
        <Link href="https://www.linkedin.com/in/bernard-kyaluzi-04060a253/">
        <FaLinkedin size="40px"/> 
        </Link>
        <Link href="mailto:bernardkya@gmail.com">
        <MdContactMail size="40px"/> 
        </Link>
        <Link href="https://bernkyal.github.io/myportfolio/BernardCV.pdf" download>
        <FaFileDownload  size="40px"/> 
        </Link>
        </VStack>    
      </HStack>
    </Grid>            
    </>
  )
}
