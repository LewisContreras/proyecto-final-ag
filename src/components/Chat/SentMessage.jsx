import { Flex } from '@chakra-ui/layout'
import React from 'react'

function SentMessage({message}) {
    return (
        <Flex maxWidth="80%" color="white" borderRadius="10px" backgroundColor="#33A109" padding={2} alignSelf="flex-end" >
            {message.message}
        </Flex>
    )
}

export default SentMessage
