import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'

function ContentChat() {
    return (
        <VStack spacing={4} padding={4} minHeight="80vh" backgroundColor="#77D353" >
            <SentMessage/>
            <ReceivedMessage/>
            <Input position="fixed" backgroundColor="white" type="text" height="50px" color="black" bottom="20px" width="90%"  />
        </VStack>
    )
}

export default ContentChat
