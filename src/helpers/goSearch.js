import { db } from "../firebase/firebase-config";

export const goSearch = async () =>{

                let pets = []
                // await db.collection("Data/pets/pet").orderBy("name").startAfter(last).limit(4)
                await db.collection("Data/pets/pet").orderBy("date").get().then(snap =>{
                    snap.forEach(hijo => {
                        pets.push({
                            id:hijo.id,
                            ...hijo.data()
                        })
                    });
                }).catch(err =>console.log(err))

        return pets
    }