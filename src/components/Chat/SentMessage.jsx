import { Flex } from '@chakra-ui/layout'
import React from 'react'

function SentMessage() {
    return (
        <Flex maxWidth="80%" color="white" borderRadius="10px" backgroundColor="#33A109" padding={2} alignSelf="flex-end" >
            Hola, cómo estás? puedo preguntar algo?
        </Flex>
    )
}

export default SentMessage
