import { Box} from '@chakra-ui/layout'
import React, { useState } from 'react'
import ContentChat from '../components/Chat/ContentChat'
import HeaderChat from '../components/Chat/HeaderChat'
import SentMessage from '../components/Chat/SentMessage'
import { db } from '../firebase/firebase-config'
import { useChat } from '../helpers/useChat'


function Chat() {

    return (
        <Box>
            <HeaderChat/>
            <ContentChat/>
        </Box>
        
    )
}

export default Chat
