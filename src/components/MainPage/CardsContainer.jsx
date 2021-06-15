import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import "../../styles/animations.css"

function CardsContainer() {
    return (
        <Grid templateColumns="repeat(2, 150px)" wrap="wrap" gap="10px" justifyContent="space-between" ms="5px" mt="10px" width="90%" pb="10px"   >
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
