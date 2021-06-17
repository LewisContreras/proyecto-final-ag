import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const MessagesChat = () => {

    const messages = useSelector(state => state.petsInfo.messages)
    console.log(messages);
   
    
    return (
        !messages.length
        ?<p>hola</p>
        :<div>
           {
               messages.map((el, i) =><p key={i} >hola pai</p>)
           }
        </div>
    )
}

export default MessagesChat
