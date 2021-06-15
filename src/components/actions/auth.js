import {types} from '../../types/types'
import {firebase, googleAuthProvider} from '../../firebase/firebase-config'
import { startLoading, finishLoading } from '../actions/uiError'
import Swal from 'sweetalert2'

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No seleccionó ninguna cuenta de Google!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())

    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => ({
    type: types.logout
})
