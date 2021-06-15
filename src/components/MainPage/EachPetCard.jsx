import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import "../../styles/animations.css"



function EachPetCard({pet}) {
    console.log(pet);
    return (
        <Box className="scene_element scene_element--fadeinup" borderRadius="6px" boxShadow="lg" overflow="hidden" width="160px"
          backgroundColor="#77D353" >
            <Image  width="100%" height="180px" src={pet.url} />
            <Text mx="2" mt="10px" width="max-content" borderRadius="20px" py="3px" px="10px" bgColor="yellow.300" color="white" textDecoration="none" >{pet.state}</Text>
            <Text>{`Nombre: ${pet.name}`}</Text>
            <Text>Dirección</Text>
            <Text>{pet.latitude}</Text>
            <Text>{pet.longitude}</Text>
        </Box>       
    )
}

export default EachPetCard
