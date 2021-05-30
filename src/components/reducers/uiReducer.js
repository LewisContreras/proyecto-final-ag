import {types} from '../../types/types'

const initialState = {
    loadding: false,
    msjError: null
}

export const registro = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msjError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msjError: null
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

            case types.logout:
                return {}

        default:
            return state;
    }


}