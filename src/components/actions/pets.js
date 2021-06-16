import Swal from 'sweetalert2';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { loadPets, loadMyPets, loadSearch } from '../../helpers/loadPets';
import { fileUpload } from '../../helpers/fileUpload';

export const startNewPet = (pet) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newPet = {
            name: pet.name,
            age: pet.age,
            color: pet.color,
            reward: pet.reward,
            desc_reward: pet.desc_reward,
            desc_pet: pet.desc_pet,
            latitude: pet.latitude,
            longitude: pet.longitude,
            url: pet.url_pet,
            id_user: uid,
            state: 'Desaparecido'
        }

        const doc = await db.collection("Data/pets/pet").add(newPet);
        dispatch(startLoadinMyPets(uid));
        dispatch(startLoadingPets(uid));
        dispatch(addNewPet(doc.id, newPet));

    }
}

export const activePet = (id, pets) => ({
    type: types.petActive,
    payload: {
        id,
        ...pets
    }
});

export const addNewPet = (id, pet) => ({
    type: types.petAddNew,
    payload: {
        id, ...pet
    }
})

export const startLoadinMyPets = (uid) => {
    return async (dispatch) => {
        const pets = await loadMyPets(uid);
        dispatch(setMyPets(pets));
    }
}

export const startLoadingPets = (uid) => {
    return async (dispatch) => {
        const pets = await loadPets(uid);
        dispatch(setPets(pets));

    }
}

export const startSearch = (search) => {
    return async (dispatch) => {
        const pets = await loadSearch(search);
        dispatch(setPets(pets));
    }
}

export const setMyPets = (pets) => ({
    type: types.myPetLoad,
    payload: pets
});

export const setPets = (pets) => ({
    type: types.petLoad,
    payload: pets
});

export const startSavePet = (pet) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const petToFirestore = { ...pet };
        delete petToFirestore.id;

        await db.doc(`Data/pets/pet/${pet.id}`).update(petToFirestore);

        Swal.fire({
            position: 'center',
            icon: 'success',
            allowOutsideClick: false,
            title: 'Los cambios se han guardado',
            showConfirmButton: false,
            timer: 1000
        })

        dispatch(startLoadingPets(uid));
        dispatch(startLoadinMyPets(uid));
    }
}

export const refreshPet = (id, pets) => ({
    type: types.petUpdated,
    payload: {
        id,
        pets: {
            id,
            ...pets
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        // const { active: activePet } = getState().pets;

        Swal.fire({
            title: 'Subiendo Foto...',
            text: 'Por Favor Espere...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        Swal.close();
        return (fileUrl)

    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`Data/pets/pet/${id}`).delete();
        dispatch(deletePet(id));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Eliminado',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(startLoadingPets(uid));
        dispatch(startLoadinMyPets(uid));

    }
}

export const deletePet = (id) => ({
    type: types.petDelete,
    payload: id
});

export const petLogout = () => ({
    type: types.petLogoutCleaning
});

export const activeValoracion = (val) => ({
    type: types.petValoracion,
    payload: val
});
