import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { petsInfoReducer } from '../components/reducers/petsInfoReducer';
import { authReducer } from '../components/reducers/authReducer';
import { petReducer } from '../components/reducers/petReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    pets: petReducer,
    petsInfo: petsInfoReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        //Se requiere la libreria Thunk que permite tener la comunicación directa con el middleware, la dependencia de la BD Firebase y validación de los campos con validator
        applyMiddleware(thunk)
    )
);