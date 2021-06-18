import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import React from 'react'

function ReceivedMessage({message,previous}) {
    return (
        <Flex  textAlign="center" flexDirection="column" width="100%"  >
            {   
                previous.state === message.state
                ?null
                :<Text>{`${new Date(message.timeStamp).getHours()}:${new Date(message.timeStamp).getMinutes()<9 ? "0" + new Date(message.timeStamp).getMinutes() : new Date(message.timeStamp).getMinutes()}`}</Text>
                
            }
        <Flex  fontWeight="500" wordBreak="break-all" maxWidth="80%" color="#33A109" borderRadius="10px" backgroundColor="white" padding={2} alignSelf="flex-start" >
           {message.message}
        </Flex>
        </Flex>
        
    )
}

export default ReceivedMessage
