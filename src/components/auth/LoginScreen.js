import React from 'react';
import { useDispatch } from 'react-redux'
import { startGoogleLogin } from '../actions/auth'
import { Flex, Heading, Box, Image, Button } from "@chakra-ui/react"
import Normalize from 'react-normalize';
import { FcGoogle } from "react-icons/fc";


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleGoogle = (e) => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <Normalize />
            <Flex height="100vh" alignItems="center" justifyContent="center" background="#d8f8b7">
                <Flex direction="column" alignItems="center" justifyContent="center" background="#a3d2ca" p={12} rounded={6}>
                    <Heading mt={20} mb={25}>Log In FindPets</Heading>
                    <Box>
                        <Image
                            rounded={100}
                            boxSize="200px"
                            src="https://image.freepik.com/vector-gratis/lindo-perro-gato-amigo-caricatura_138676-2432.jpg"
                            alt="Logo FindPet"
                        />
                    </Box>
                    <Button
                        leftIcon={<FcGoogle />}
                        mt={20}
                        mb={20}
                        colorScheme="teal"
                        variant="outline"
                        onClick={handleGoogle}
                    >
                        Iniciar Sesión con Google
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}
