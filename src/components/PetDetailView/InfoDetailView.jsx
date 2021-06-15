import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Link, Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Center, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaShare, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link as ReachLink } from 'react-router-dom';
import { petDetail } from '../actions/petsInfoActions'

function InfoDetailView() {
    const detail = useSelector(state => state.petsInfo.detail)
    const getLink =()=>{
        var aux = document.createElement("input");
        aux.setAttribute("value",window.location.href.split('?')[0].split('#')[0]);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        }

        

    return (
        <Box  position="relative" width={["100vw", "100vw","40vw"]} >
            <Box position="absolute" display={["block", "block","none"]} top="-12" right="0" w="100vw"  dangerouslySetInnerHTML={{__html: '<div style="height: 80px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #77D353;"></path></svg></div>'}} height="150px" overflow="hidden"  >
            </Box>
            <Box position="absolute" display={["none", "none","block"]} right={["0","0","180","250"]} w="40vw"  dangerouslySetInnerHTML={{__html: '<div style="height: 100vh; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z" style="stroke: none; fill: #77D353;"></path></svg></div>'}}  overflow="hidden"  >
            </Box>
            <Box px={6} pb="70px" position="relative" minHeight={["50vh","50vh","100vh"]} backgroundColor="#77D353" >
            <Button onClick={()=>getLink()} position="absolute" display="none" top="-10px" right="20px" color="white" backgroundColor="#33A109"  rightIcon={<FaShare color="white" />} >Compartir</Button>
            <VStack  alignItems="start" >
                <HStack mt="10px" mb="20px" justifyContent="space-between" >
                  <Box fontWeight="600" borderRadius="34px" px="10px" h="34px" fontSize="xl" bgColor="yellow.400" color="white" >
                    Desaparecido
                  </Box  >
                    {
                        !detail.reward
                        ?null
                        :<Center fontWeight="700" border="3px solid black" borderRadius="34px" px="10px" h="34px" color="black" fontSize="xl" bgColor="gold"  >
                        $ Recompensa
                        </Center>
                    }
                  
                </HStack>
            <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Nombre: <Text color="white" fontWeight="400" as="span" >{detail.name}</Text>
            </Text>
            <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Edad: <Text color="white" fontWeight="400" as="span" >{`${detail.age} años`}</Text>
            </Text>
            <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Color: <Text color="white" fontWeight="400" as="span" >{detail.color}</Text>
            </Text>
            <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Descripción: <Text color="white" fontWeight="400" as="span" >{detail.desc_pet}</Text>
            </Text>
            {
                !detail.reward
                ?null
                :<Box>
                    <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Recompensa: <Text color="black" fontWeight="00" as="span" >{`$ ${detail.reward}`}</Text>
                </Text>
                    <Text fontSize="2xl" color="blackAlpha.700" fontWeight="700"  >Detalles: <Text color="white" fontWeight="400" as="span" >{detail.desc_reward}</Text>
                </Text>
                </Box>
            }
            
            
            </VStack>
            
            <HStack bgColor="#77D353" height="60px" position="fixed" bottom="0" left="0" right="0" px="20px" justifyContent="space-between" mt={4}>
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
