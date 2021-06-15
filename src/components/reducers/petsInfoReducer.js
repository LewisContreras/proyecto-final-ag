import {types} from '../../types/types'

const initialState = {
    info:[]
}

export const petsInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.petSearchInfo:
            return {
                ...state,
                info: action.payload
            }

        default:
            return state;
    }


}