import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { store } from './store/store';
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter';
import theme from './styles/theme';


export const App = () => {
    return (
        <ChakraProvider theme={theme} >
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </ChakraProvider>
    )
}