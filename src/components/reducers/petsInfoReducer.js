import {types} from '../../types/types'

const initialState = {
    info:[],
    detail:null,
    last: null,
    chat: "",
    messages: []
}

export const petsInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.petSearchInfo:
            return {
                ...state,
                info: action.payload
            }
        
        case types.petDetail:
            return {
                ...state,
                detail: action.payload
            }

        case types.petLast:
            return {
                ...state,
                last: action.payload
            }

        case types.petChat:
            return {
                ...state,
                chat: action.payload
            }

        case types.petMessages:
            return {
                ...state,
                messages: action.payload
            }

        default:
            return state;
    }


}