import { Flex } from '@chakra-ui/layout'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function SentMessage({message,previous}) {
    return (
        <Flex  textAlign="center" flexDirection="column" width="100%"  >
            {   
                previous.state === message.state
                ?null
                :<Text>{`${new Date(message.timeStamp).getHours()}:${new Date(message.timeStamp).getMinutes()<9 ? "0" + new Date(message.timeStamp).getMinutes() : new Date(message.timeStamp).getMinutes()}`}</Text>
                
            }
            <Flex  maxWidth="80%" wordBreak="break-all" color="white" borderRadius="10px" backgroundColor="#33A109" padding={2} alignSelf="flex-end" >
            {message.message}
        </Flex>
        </Flex>
    )
}

export default SentMessage
