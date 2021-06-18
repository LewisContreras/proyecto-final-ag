import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { petChat } from '../actions/petsInfoActions'
import EachMessageCard from './EachMessageCard'


const ContainerMessages = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const messages = useSelector(state => state.petsInfo.messages)

    return (
            <Box>
                <Box mb="20px" ><Text fontWeight="600" fontSize="2xl" color="brand.title" >
                Chats</Text></Box>
                {
                    !messages.length
                    ?<Text fontSize="xl" color="brand.title" >No tienes mensajes</Text>
                    :messages.map(el =><EachMessageCard message={el}  key={el.id} onClick={()=>{
                        dispatch(petChat(el.id))
                        history.push("/chat")
                    }} /> )
                }
            </Box>
            

            
                
            
        
        
        
    )
}

export default ContainerMessages
