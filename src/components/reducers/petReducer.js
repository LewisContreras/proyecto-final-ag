import { types } from '../../types/types';

const initialState = {
    pets: [],
    myPets: [],
    active: null
}


export const petReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.petAddNew:
            return {
                ...state,
                pets: [action.payload, ...state.pets]
            }

        case types.petLoad:
            return {
                ...state,
                pets: [
                    ...action.payload
                ]
            }

        case types.myPetLoad:
            return {
                ...state,
                myPets: [
                    ...action.payload
                ]
            }

        case types.petDelete:
            return {
                ...state,
                pets: state.pets.filter(pets => pets.id !== action.payload)
            }

        case types.petActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.petValoracion:
            return {
                ...state,
                valoracion: action.payload
            }

        case types.petUpdated:
            return {
                ...state,
                pets: state.pets.map(
                    pets => pets.id === action.payload.id
                        ? action.payload.pets
                        :
                        pets
                )
            }

        default:
            return state
    }


}