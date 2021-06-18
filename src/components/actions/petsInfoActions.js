import { goSearch } from "../../helpers/goSearch";
import { types } from "../../types/types";


export const petStartSearchInfo = () => {

    return async (dispatch,getState) => {
        // const last = await getState().petsInfo.last
        // const info = getState().petsInfo.info
        const pets = await goSearch()
        // if(!!pets.length){
        //     console.log(pets[pets.length - 1].idDoc);
        //     const lasted = pets[pets.length - 1].idDoc
        //     dispatch(petLast(pets[pets.length - 1].idDoc))
        // }
        dispatch(petSearchInfo([...pets]))
    }

}

export const petSearchInfo = (pets) => {
    return {
        type: types.petSearchInfo,
        payload: pets
    }
}

export const petChat = (user) => {
    return {
        type: types.petChat,
        payload: user
    }
}

export const petChatMessages = (messages) => {
    return {
        type: types.petMessages,
        payload: messages
    }
}

export const petDetail = (pet) => {
    return {
        type: types.petDetail,
        payload: pet
    }
}

export const petLast = (last) => {
    return {
        type: types.petLast,
        payload: last
    }
}




