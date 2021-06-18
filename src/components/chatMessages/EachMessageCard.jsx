import { Box, HStack, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { petChat } from '../actions/petsInfoActions';

const EachMessageCard = ({message}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <HStack onClick={()=>{
            dispatch(petChat(message))
            history.push("/chat")
        }}  spacing="20px" mb="10px" p="10px"  h="100px" borderRadius="20px" maxWidth="98%" mx="auto" bgColor="brand.primary" >
            <Box width="70px" flexShrink="0" overflow="hidden" borderRadius="35px">
            <Img maxWidth="100%" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
            </Box>
            
            <HStack pr="10px" width="100%" justifyContent="space-between" >
            <VStack alignItems="start" >
                <Text fontWeight="600" fontSize="xl" >{message.displayName}</Text>
                <Text>{new Date(message.timeStamp).toLocaleDateString()}</Text>
            </VStack>
            <Text>{`${new Date(message.timeStamp).getHours()}:${new Date(message.timeStamp).getMinutes()<9 ? "0" + new Date(message.timeStamp).getMinutes() : new Date(message.timeStamp).getMinutes()}`}</Text>
            </HStack>
        </HStack>
    )
}

export default EachMessageCard
