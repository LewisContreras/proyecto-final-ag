import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { Button, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../firebase/firebase-config'
import { useChat } from '../../helpers/useChat'
import { petChatMessages } from '../actions/petsInfoActions'
import MessagesChat from './MessagesChat'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'


function ContentChat() {

    const dispatch = useDispatch()
    const chat = useSelector(state => state.petsInfo.chat)
    const uid = useSelector(state => state.auth.uid)
    const [message, setMessage] = useState()
    const {loading, messages, error} = useChat(uid,chat)

    const handleClick = async (e)=>{
        e.preventDefault()
        let objectSend = {
                    message,
                    timeStamp : Date.now(),
                    state:"sent"
                }
        console.log(document.scrollingElement.scrollHeight);
        window.scrollTo(0,document.body.scrollHeight);
        await db.doc(`/chat/user/${uid}/${chat}`).set({name:chat})

        await db.collection(`/chat/user/${uid}/${chat}/messages`).add(objectSend)
        objectSend.state = "received"
        await db.collection(`/chat/user/${chat}/${uid}/messages`).add(objectSend)
    }
    // const [messages, setMessages] = useState([])

    // useEffect(() => {
    //     let newMessages = []
    //     const unsubscribe = db.collection(`${uid}/chat/${chat}`).onSnapshot(snap=>{
    //         snap.forEach(hijo =>{
    //             newMessages.push({
    //                 ...hijo.data()
    //             })
    //         })
    //     })
    //     dispatch(petChatMessages(newMessages))
    //     setMessages(newMessages)
        

        
    //     return ()=>unsubscribe()
    // }, [setMessages,dispatch])

    // const handleSubmitChat = async (e) =>{
    //     e.preventDefault()
    //     let send = e.target.firstElementChild.value
    //     let objectSend = {
    //         message: send,
    //         timeStamp : Date.now(),
    //         state:"sent"
    //     }
    //     await db.collection(`${uid}/chat/${chat}`).add(objectSend)
    //     objectSend.state = "received"
    //     await db.collection(`${chat}/chat/${uid}`).add(objectSend)
    //     setMessages([...messages, send])
    // }

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
            <HStack width="90%"  as="form" position="fixed" bottom="20px" 
            // onSubmit={handleSubmitChat}
             >
            <Input  backgroundColor="white" onChange={(e)=>setMessage(e.target.value)} type="text" height="50px" color="black"   />
            <Button height="50px" bgColor="brand.primary" type="submit" value={message}  onClick={handleClick}  >Enviar</Button>
            </HStack>
        </VStack>
    )
}

export default ContentChat
