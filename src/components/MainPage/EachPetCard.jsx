import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import "../../styles/animations.css"



function EachPetCard() {
    return (
        <Box className="scene_element scene_element--fadeinup" borderRadius="6px" boxShadow="lg" overflow="hidden" width="160px"
         height="200px" backgroundColor="#77D353" >
            <Image height="80%" src="https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg" />
            <Text color="white" textDecoration="none" >Desaparecido</Text>
        </Box>       
    )
}

export default EachPetCard
