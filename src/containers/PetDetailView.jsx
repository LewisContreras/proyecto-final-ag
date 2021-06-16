import { Box } from '@chakra-ui/layout'
import React from 'react'
import ImageDetailView from '../components/PetDetailView/ImageDetailView'
import InfoDetailView from '../components/PetDetailView/InfoDetailView'
import "../styles/animations.css"
function PetDetailView() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
    return (
        <Box 
         className="scene_element scene_element--clippathdown" 
         display={["block","block", "flex"]} flexDirection={["column", "column", "row"]} >
            <ImageDetailView/>
            <InfoDetailView/>
        </Box>
    )
}

export default PetDetailView
