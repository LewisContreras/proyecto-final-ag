import { Box } from '@chakra-ui/layout'
import React from 'react'
import ImageDetailView from '../components/PetDetailView/ImageDetailView'
import InfoDetailView from '../components/PetDetailView/InfoDetailView'

function PetDetailView() {
    return (
        <Box display={["block","block", "flex"]} flexDirection={["column", "column", "row"]} >
            <ImageDetailView/>
            <InfoDetailView/>
        </Box>
    )
}

export default PetDetailView
