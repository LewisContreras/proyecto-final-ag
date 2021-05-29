import { Box} from '@chakra-ui/layout'
import React from 'react'
import ContentChat from '../components/Chat/ContentChat'
import HeaderChat from '../components/Chat/HeaderChat'


function Chat() {
    return (
        <Box>
            <HeaderChat/>
            <ContentChat/>
        </Box>
        
    )
}

export default Chat
