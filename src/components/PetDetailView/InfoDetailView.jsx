import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { FaShare, FaUser } from 'react-icons/fa'

function InfoDetailView() {
    return (
        <Box padding={6} position="relative" minHeight="50vh" backgroundColor="#77D353" >
            <Button position="absolute" top="20px" right="20px" color="white" backgroundColor="#33A109"  rightIcon={<FaShare color="white" />} >Compartir</Button>
            <Text fontSize="xl" color="white" >Nombre</Text>
            <Text fontSize="xl"  color="white" >Raza</Text>
            <Text fontSize="xl"  color="white" >Dirección</Text>
            <Text fontSize="xl"  color="white" >Detalles</Text>
            <Text fontSize="xl"  color="white" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat maxime consequuntur doloremque alias rem illum autem deserunt debitis. Lorem rem illum autem deserunt debitis. Lorem</Text>
            <HStack justifyContent="space-between" mt={4}>
                <Icon fontSize={30} color="white"  as={FaUser} />
                <Button color="white" backgroundColor="#33A109" >Contactar</Button>
            </HStack>
            
        </Box>
    )
}

export default InfoDetailView
