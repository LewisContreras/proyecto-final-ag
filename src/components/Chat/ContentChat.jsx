import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { Button, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase/firebase-config'
import { useChat } from '../../helpers/useChat'
import { petChatMessages } from '../actions/petsInfoActions'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'


function ContentChat() {

    const dispatch = useDispatch()
    const chat = useSelector(state => state.petsInfo.chat)
    const uid = useSelector(state => state.auth.uid)
    const name = useSelector(state => state.auth.name)
    const [message, setMessage] = useState()
    const {loading, messages, error} = useChat(uid,chat.id_user)

    const handleClick = async (e)=>{
        e.preventDefault()
        if(e.target.previousElementSibling.value.trim()!== ""){
            let objectSend = {
                message,
                timeStamp : Date.now(),
                state:"sent"
            }
    e.target.previousElementSibling.value= ""

    window.scrollTo(0,document.body.scrollHeight + 4000);
    await db.doc(`/chat/user/${uid}/${chat.id_user}`).set({
        displayName:chat.displayName,
        id_user: chat.id_user,
        timeStamp: Date.now(),
        date:new Date(Date.now()).toLocaleDateString()

    })

    await db.doc(`/chat/user/${chat.id_user}/${uid}`).set({
        displayName:name,
        id_user: uid,
        timeStamp: Date.now(),
        date:new Date(Date.now()).toLocaleDateString()

    })

    await db.collection(`/chat/user/${uid}/${chat.id_user}/messages`).add(objectSend)
    objectSend.state = "received"
    await db.collection(`/chat/user/${chat.id_user}/${uid}/messages`).add(objectSend)
        }
        
    }

    return (
        <VStack width="100%" spacing={4} px={4} pt={4} pb="120px" minHeight="80vh" backgroundColor="brand.secondary" >
                    {
                        messages.map((m, i) =>{
                            return(
                                m.state === "sent"
                                ?<SentMessage key={i} previous={messages[i-1] || {state:"no"}}  message={m}/>
                                :<ReceivedMessage key={i} previous={messages[i-1] || {state:"no"}} message={m} />
                            )
                        } )
                    }
            <HStack width="90%"  as="form" position="fixed" bottom="20px" >
            <Input  backgroundColor="white" onChange={(e)=>setMessage(e.target.value)} type="text" height="50px" color="black"   />
            <Button height="50px" bgColor="brand.primary" type="submit" value={message}  onClick={handleClick}  >Enviar</Button>
            </HStack>
        </VStack>
    )
}

export default ContentChat
