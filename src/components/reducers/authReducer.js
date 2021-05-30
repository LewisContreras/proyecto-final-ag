import {types} from '../../types/types'

export const authReducer = (state = {}, action) => {
    switch (action.types) {
        case types.login:
            return{
                uid: action.payLoad.uid,
                name: action.payLoad.displayName
            }

        case types.logout:
            return{}

        default:
            return state;
    }

}