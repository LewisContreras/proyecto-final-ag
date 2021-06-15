import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';

function CardsContainer() {
    return (
        <Grid templateColumns="repeat(auto-fill,160px)" gap="20px" justifyContent="space-evenly" mt="100px" width="90%" mx="auto" pb="20px"  className="scene_element scene_element--fadeinup" >
            {
                Array(8).fill("").map((el, index) => <Link key={index} as={ReachLink} to={`/detail/${index}`} ><EachPetCard id={index}  /></Link> )
            }
            
        </Grid>
    )
}

export default CardsContainer
