import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'

function EachPetCard() {
    return (
        <Box borderRadius="6px" boxShadow="0px 0px 19px -13px rgba(0,0,0,0.92)" overflow="hidden" width="160px"
         height="200px" backgroundColor="#77D353" >
            <Image height="80%" src="https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg" />
            <Text color="white" >Desaparecido</Text>
        </Box>       
    )
}

export default EachPetCard
