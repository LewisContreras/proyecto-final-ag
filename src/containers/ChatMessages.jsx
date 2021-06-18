import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { petChatMessages } from '../components/actions/petsInfoActions'
import ContainerMessages from '../components/chatMessages/ContainerMessages'
import HeaderChatMessages from '../components/chatMessages/headerChatMessages'
import { db } from '../firebase/firebase-config'

const ChatMessages = () => {

    const dispatch = useDispatch()
    const uid = useSelector(state => state.auth.uid)

    useEffect(() => {
        const messages = []
        db.collection(`chat/user/${uid}`).orderBy("timeStamp", "desc").onSnapshot(snap =>{
            snap.forEach(hijo => {
                messages.push({
                    id:hijo.id,
                    ...hijo.data()
                })
           
            });
            dispatch(petChatMessages(messages))
            
        })
        
        // .catch(err =>console.log(err))
    }, [])

    return (
        <Box px="5%" pt="100px" >
            <HeaderChatMessages />
            <ContainerMessages />
        </Box>
    )
}

export default ChatMessages
