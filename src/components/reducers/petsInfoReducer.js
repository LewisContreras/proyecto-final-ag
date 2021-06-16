import {types} from '../../types/types'

const initialState = {
    info:[],
    detail:null,
    last: null
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

        

        default:
            return state;
    }


}