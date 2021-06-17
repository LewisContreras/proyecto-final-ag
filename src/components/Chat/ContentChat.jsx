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
    const [message, setMessage] = useState()
    const {loading, messages, error} = useChat(uid,chat.id_user)

    const handleClick = async (e)=>{
        e.preventDefault()
        let objectSend = {
                    message,
                    timeStamp : Date.now(),
                    state:"sent"
                }
        console.log(document.scrollingElement.scrollHeight);
        window.scrollTo(0,document.body.scrollHeight);
        await db.doc(`/chat/user/${uid}/${chat.id_user}`).set({
            displayname:chat.displayName,
            id_user: chat.id_user,
            timeStamp: Date.now(),
            date:new Date(Date.now()).toLocaleDateString()

        })

        await db.collection(`/chat/user/${uid}/${chat.id_user}/messages`).add(objectSend)
        objectSend.state = "received"
        await db.collection(`/chat/user/${chat.id_user}/${uid}/messages`).add(objectSend)
    }

    return (
        <VStack spacing={4} px={4} pt={4} pb="120px" minHeight="80vh" backgroundColor="#77D353" >
                    {
                        messages.map((m, i) =>{
                            return(
                                m.state === "sent"
                                ?<SentMessage key={i}  message={m}/>
                                :<ReceivedMessage key={i} />
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
