import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../components/reducers/authReducer';
import thunk from 'redux-thunk';
import { petsInfoReducer } from '../components/reducers/petsInfoReducer';


const reducers = combineReducers({
    auth: authReducer,
    petsInfo: petsInfoReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        //Se requiere la libreria Thunk que permite tener la comunicación directa con el middleware, la dependencia de la BD Firebase y validación de los campos con validator
        applyMiddleware(thunk)
    )
);