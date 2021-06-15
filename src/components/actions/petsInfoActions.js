import { types } from "../../types/types";


export const petSearchInfo = (pets) => {
    return {
        type: types.petSearchInfo,
        payload: pets
    }
}

// export const startMovieSelected = (categorie) => {

//     return async (dispatch,getState) => {
//         const search = getState().movies.search
//         const last = getState().movies.last
//         const selected = getState().movies.selected
//         const {movies,last:lasted} = await goSearchMovies(categorie,selected,last)

//         dispatch(movieLastDoc(lasted))

//         dispatch(movieSelected(movies))
        
//     }

// }


