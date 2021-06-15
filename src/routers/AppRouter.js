import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../components/actions/auth'
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';
import Routes from './Routes.jsx'
import { startLoadingPets, startLoadinMyPets } from '../components/actions/pets';


export const AppRouter = () => {

    //Estado para comprobar si el Usuario está registrado
    const [checking, setChecking] = useState(true)

    //Estado para controlar si inició sesión o no
    const [isLooggedIn, setIsLooggedIn] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) =>{
            // console.log(user) Se muestra por consola la información del user logeado
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                dispatch(startLoadingPets(user.uid))
                dispatch(startLoadinMyPets(user.uid))
                //Actualizamos el Estado cuando inicie sesión
                setIsLooggedIn(true)
            }else{
                console.log("Usuario no Registrado")
                //Actualizamos el Estado si no inicia sesión
                setIsLooggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if(checking){
        return(
            <h2>Espere por favor</h2>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated = {isLooggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={Routes}
                        isAuthenticated = {isLooggedIn}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}