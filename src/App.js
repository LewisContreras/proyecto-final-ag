import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter';
import { ChakraProvider } from "@chakra-ui/react";
 
export const App = () => {
    return (
        <ChakraProvider>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </ChakraProvider>
        
    )
}