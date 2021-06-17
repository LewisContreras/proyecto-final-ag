import Icon from '@chakra-ui/icon'
import { Box, Center, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'


function HeaderChat() {
    const history = useHistory()
    const chat = useSelector(state => state.petsInfo.chat)
    return (
        <Center flexDirection="column" position="relative" bg="#33A109" height="20vh">
            <Box backgroundImage="url('https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png')" backgroundPosition="center" backgroundSize="cover" backgroundRepeat="no-repeat"  borderRadius="50%" width="64px" height="64px" >
            </Box>
            <Text fontWeight="600" mt={2} color="white" >{chat.displayName}</Text>

            <Icon onClick={()=>history.goBack()} fontSize="30px" color="white" position="absolute" cursor="pointer" top="calc(50%-30px)" left={8} as={FaArrowLeft} />

        </Center>
        
    )
}

export default HeaderChat
