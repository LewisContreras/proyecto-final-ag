import Icon from '@chakra-ui/icon'
import { Center } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import {FaArrowLeft} from "react-icons/fa"
import { useHistory } from 'react-router'


function ImageDetailView() {
    const history = useHistory()
    return (
        <Box position="relative" backgroundImage="url('https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg')"  height="50vh" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" >

            <Center onClick={()=> history.goBack()} cursor="pointer" boxSize={10} borderRadius="50%" backgroundColor="#33A109" position="absolute" top="20px" left="20px">
                <Icon color="white"  as={FaArrowLeft} />
            </Center>
            
        </Box>
    )
}

export default ImageDetailView
