import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import "../../styles/animations.css"

function CardsContainer() {
    return (
        <Grid templateColumns="repeat(auto-fill,160px)" gap="10px" justifyContent="space-evenly" mt="100px" width={["100%","90%"]} mx="auto" pb="20px"   >
            {
                Array(8).fill("").map((el, index) => <Link display="inline-block" _hover={{
                    textDecoration:"none",
                    transform: "scale(1.03)"
                }} textDecoration="none" key={index} as={ReachLink} to={`/detail/${index}`} ><EachPetCard id={index}  /></Link> )
            }
            
        </Grid>
    )
}

export default CardsContainer
