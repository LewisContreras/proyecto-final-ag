import {useEffect, useState} from "react"
import { db } from "../firebase/firebase-config"

export const useChat = (uid,chat)=>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection(`/chat/user/${uid}/${chat}/messages`).orderBy("timeStamp").onSnapshot(
            snapshot =>{
                setLoading(false)
                setMessages(snapshot.docs.map(d =>({id:d.id, ...d.data()})))
            },
            err =>{
                setError(err)
            }

        )
        return ()=>unsubscribe()
    }, [setMessages])
    // db.doc(`chat/user/${uid}/${chat}`).update({userId:chat})
    return {error, loading, messages}
}