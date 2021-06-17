import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { petChat } from '../actions/petsInfoActions'


const ContainerMessages = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const messages = useSelector(state => state.petsInfo.messages)
    console.log(messages);

    return (
            <Box>
                <Box  ><Text fontWeight="600" fontSize="2xl" color="brand.title" >
                Chats</Text></Box>
                {
                    !messages.length
                    ?<Text fontSize="xl" color="brand.title" >No tienes mensajes</Text>
                    :messages.map(el =><Box key={el.id} onClick={()=>{
                        dispatch(petChat(el.id))
                        history.push("/chat")
                    }} ><Text fontWeight="600" fontSize="2xl" color="brand.title" >
                    {el.id}</Text></Box>)
                }
            </Box>
            

            
                
            
        
        
        
    )
}

export default ContainerMessages
