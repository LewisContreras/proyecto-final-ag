import { Button } from '@chakra-ui/button'
import { Center } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";
import { startUploading, startNewPet } from '../actions/pets';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory  } from 'react-router-dom'

function ContentPost() {

    const dispatch = useDispatch();
    let history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            color: '',
            reward: '',
            desc_reward: '',
            desc_pet: '',
            latitude: '',
            longitude: '',
            url_pet: '',
        },
        //Validación con Yup
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Nombre Requerido'),
            age: Yup.number()
                .required('Edad Requerida'),
            color: Yup.string()
                .required('Color Requerido'),
            desc_pet: Yup.string()
                .required('Desdcripción de la Mascota Requerida'),
            latitude: Yup.string()
                .required('Por favor presione Obtener Ubicacion'),
            url_pet: Yup.string()
                .required('Por favor cargue una imagen de la mascota'),
        }),
        onSubmit: values => {
            dispatch(startNewPet(values));

            Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				allowEscapeKey: false,
				allowOutsideClick: false,
				timer: 1500
			})
            formik.handleReset()
            setTimeout(pushHome, 2000)
        },
    });

    const pushHome = () => {
        history.push('/')
    }

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latit = position.coords.latitude;
            let longit = position.coords.longitude;
            formik.values.latitude = latit
            formik.values.longitude = longit
        });
    }

    const handlePicture = () => {
        document.querySelector('#url_pet').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const urlFile = dispatch(startUploading(file));
        urlFile.then((url) => {
            formik.values.url_pet = url
        })
    }

    return (
        <div className="scene_element scene_element--fadeinright">
            <form onSubmit={formik.handleSubmit}>
                <Center flexDirection="column" pt="10px" px={6} backgroundColor="#77D353" minHeight="100vh">

                    <FormControl>
                        <FormLabel>Nombre de la Mascota</FormLabel>
                        <Input
                            type="text"
                            placeholder="Nombre de la Mascota"
                            name="name"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Edad de la Mascota</FormLabel>
                        <Input
                            type="number"
                            placeholder="Edad de la Mascota"
                            name="age"
                            id="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.age ? <div className="text-danger">{formik.errors.age}</div> : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Color de la Mascota</FormLabel>
                        <Input
                            type="text"
                            placeholder="Color de la Mascota"
                            name="color"
                            id="color"
                            value={formik.values.color}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.color ? <div className="text-danger">{formik.errors.color}</div> : null}
                    </FormControl>

                    <FormControl className="mb-4">
                        <FormLabel>Recompensa</FormLabel>
                        <Input
                            type="number"
                            placeholder="Valor Recompensa"
                            name="reward"
                            id="reward"
                            value={formik.values.reward}
                            onChange={formik.handleChange}
                        />
                    </FormControl>

                    <Textarea
                        className="mb-4"
                        height="150px"
                        id="desc_reward"
                        name="desc_reward"
                        backgroundColor="white"
                        color="black"
                        placeholder="Descripción de la Recompensa"
                        value={formik.values.desc_reward}
                        onChange={formik.handleChange}
                    />

                    <Textarea
                        height="300px"
                        id="desc_pet"
                        name="desc_pet"
                        backgroundColor="white"
                        color="black"
                        placeholder="Descripción de la Mascota"
                        value={formik.values.desc_pet}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.desc_pet ? <div className="text-danger">{formik.errors.desc_pet}</div> : null}

                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="button"
                        onClick={getPosition}
                    >
                        Obtener Mi Ubicacion
                    </Button>
                    {formik.errors.latitude ? <div className="text-danger">{formik.errors.latitude}</div> : null}

                    <Input
                        name="latitude"
                        id="latitude"
                        type="text"
                        hidden
                    />

                    <Input
                        name="longitude"
                        id="longitude"
                        type="text"
                        hidden
                    />

                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="button"
                        onClick={handlePicture}
                    >
                        Agregar Imagen de la Mascota
                    </Button>

                    <Input
                        id="url_pet"
                        type="file"
                        name="url_pet"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    {formik.errors.url_pet ? <div className="text-danger">{formik.errors.url_pet}</div> : null}

                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        mb={2}
                    >
                        Reportar Mascota
                    </Button>
                </Center>
            </form>
        </div>
    )
}

export default ContentPost
