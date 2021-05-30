import { Flex } from '@chakra-ui/layout'
import React from 'react'

function ReceivedMessage() {
    return (
        <Flex fontWeight="500" maxWidth="80%" color="#33A109" borderRadius="10px" backgroundColor="white" padding={2} alignSelf="flex-start" >
            Hola, cómo estás? puedo preguntar algo?
        </Flex>
    )
}

export default ReceivedMessage
