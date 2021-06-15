import { db } from '../firebase/firebase-config';

export const loadPets = async ( uid ) => {

    const petsSnap = await db.collection("Data/pets/pet").orderBy('name').get();

    const pets = [];

    petsSnap.forEach( snapHijo => {
        pets.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return pets;
}

export const loadMyPets = async ( uid ) => {

    const petsSnap = await db.collection('Data/pets/pet').where('id_user', '==', `${uid}`).get();

    const myPets = [];

    petsSnap.forEach( snapHijo => {
        myPets.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return myPets;
}

export const loadSearch = async(search) => {

    let respuesta = '';

    if(search === ''){
        respuesta = await db.collection("Data/pets/pet").orderBy('name').get();
    }else{
        respuesta = await db.collection("Data/pets/pet").where("name", "==", search).get();
    }

    const pets = [];

    respuesta.forEach(pet => {
        pets.push({
            id: pet.id,
            ...pet.data()
        })
    });
    return pets;
}





