import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Center, HStack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import {MdPhoto} from "react-icons/md"

function ContentPost() {
    return (
        <Center flexDirection="column" pt="100px" px={6} backgroundColor="#77D353" minHeight="100vh">
            <Textarea height="300px" backgroundColor="white" placeholder="Coloca la información de tu mascota, trata de dar la mayor cantidad de detalles posibles..." />
            <HStack width="100%" justifyContent="space-between" px="16px" borderRadius="0 0 10px 10px" position="relative" top="-10px" height="60px" backgroundColor="#33A109" > 
                <Icon fontSize={30} color="white" as={MdPhoto} />
                <Button color="#33A109" >Publicar</Button>   
            </HStack>
<<<<<<< HEAD
            {/* <InputPrueba/> */}
=======
>>>>>>> Carlos
        </Center>
    )
}

export default ContentPost
