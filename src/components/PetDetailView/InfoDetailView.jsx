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
        <Box padding={6} position="relative" minHeight="50vh" backgroundColor="#77D353" >
            <Button onClick={()=>getLink()} position="absolute" top="20px" right="20px" color="white" backgroundColor="#33A109"  rightIcon={<FaShare color="white" />} >Compartir</Button>
            <Text fontSize="xl" color="white" >Nombre</Text>
            <Text fontSize="xl"  color="white" >Raza</Text>
            <Text fontSize="xl"  color="white" >Dirección</Text>
            <Text fontSize="xl"  color="white" >Detalles</Text>
            <Text fontSize="xl"  color="white" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat maxime consequuntur doloremque alias rem illum autem deserunt debitis. Lorem rem illum autem deserunt debitis. Lorem</Text>
            <HStack justifyContent="space-between" mt={4}>
                <Icon fontSize={30} color="white"  as={FaUser} />
                <Link to="/chat"  as={ReachLink} >
                    <Button color="white" backgroundColor="#33A109" >Contactar</Button>
                </Link>
            </HStack>
            
        </Box>
    )
}

export default InfoDetailView
