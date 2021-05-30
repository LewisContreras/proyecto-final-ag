import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { store } from './store/store';
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter';

export const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <AppRouter />
            </ChakraProvider>
        </Provider>
    )
}