import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Link, Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { FaShare, FaUser } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom';

function InfoDetailView() {

    const getLink =()=>{
        var aux = document.createElement("input");
        aux.setAttribute("value",window.location.href.split('?')[0].split('#')[0]);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        }

        

    return (
        <Box position="relative" width={["100vw", "100vw","50vw"]} >
            <Box position="absolute" display={["block", "block","none"]} top="-12" right="0" w="100vw"  dangerouslySetInnerHTML={{__html: '<div style="height: 80px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #77D353;"></path></svg></div>'}} height="150px" overflow="hidden"  >
            </Box>
            <Box position="absolute" display={["none", "none","block"]} right={["0","0","16","20"]} w="80vw"  dangerouslySetInnerHTML={{__html: '<div style="height: 100vh; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z" style="stroke: none; fill: #77D353;"></path></svg></div>'}}  overflow="hidden"  >
            </Box>
            <Box padding={6} position="relative" minHeight={["50vh","50vh","100vh"]} backgroundColor="#77D353" >
            <Button onClick={()=>getLink()} position="absolute" top="20px" right="20px" color="white" backgroundColor="#33A109"  rightIcon={<FaShare color="white" />} >Compartir</Button>
            <Text fontSize="xl" color="white" >Nombre</Text>
            <Text fontSize="xl"  color="white" >Raza</Text>
            <Text fontSize="xl"  color="white" >Dirección</Text>
            <Text fontSize="xl"  color="white" >Detalles</Text>
            <Text fontSize="xl"  color="white" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat maxime consequuntur doloremque alias rem illum autem deserunt debitis. Lorem rem illum autem deserunt debitis. Lorem</Text>
            <HStack justifyContent="space-between" mt={4}>
                <Icon fontSize={30} color="white"  as={FaUser} />
                <Link to="/chat" as={ReachLink} >
                    <Button color="white" backgroundColor="#33A109" >Contactar</Button>
                </Link>
            </HStack>
            
        </Box>
        </Box>
        
    )
}

export default InfoDetailView
