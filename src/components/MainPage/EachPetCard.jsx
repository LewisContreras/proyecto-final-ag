import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Center, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import "../../styles/animations.css"
import Typewriter from 'typewriter-effect';



function EachPetCard({pet}) {
    return (
        <Box border="2px solid #77D353" className="scene_element scene_element--fadeinup" borderRadius="6px" boxShadow="lg" overflow="hidden" width="160px"
          backgroundColor="#77D353" >
            <Image  width="100%" height="180px" src={pet.url} />
            <VStack px="3px" my="10px"  alignItems="start" >
                <HStack  justifyContent="space-evenly" >
                    {
                        pet.reward
                        ?
                        <Box   width="max-content" borderRadius="20px" py="3px" px="8px" bgColor="yellow.300" fontWeight="600" color="white" textDecoration="none" >
                            <Typewriter
                                options={{
                                    strings: [`${pet.state}`, `${pet.reward}`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Box>
                        :
                        <Text   width="max-content" borderRadius="20px" py="3px" px="8px" bgColor="yellow.300" fontWeight="600" color="white" textDecoration="none" >{pet.state}</Text>
                    }

                    {
                        !pet.reward
                        ?null
                        :<Center fontWeight="700" border="1px solid black" borderRadius="27px" px="5px" h="27px" color="black" fontSize="xl" bgColor="gold"  >
                        $
                        </Center>
                    }
                </HStack>
                <Text fontSize="18px" color="blackAlpha.700" fontWeight="700"  >Nombre: <Text color="white" fontWeight="400" as="span" >{pet.name}</Text>
                </Text>
                <Text fontSize="18px" color="blackAlpha.700" fontWeight="700"  >Dirección: <Text color="white" fontWeight="400" as="span" ></Text>
                </Text>
            </VStack>
        </Box>
    )
}

export default EachPetCard
