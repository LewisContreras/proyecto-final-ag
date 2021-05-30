import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';

function CardsContainer() {
    return (
        <Flex justifyContent="space-between" wrap="wrap" mt="100px" width="90%" mx="auto">
            {
                Array(8).fill("").map((el, index) => <Link width="46%" key={index} as={ReachLink} to={`/detail/${index}`} ><EachPetCard id={index}  /></Link> )
            }
            
        </Flex>
    )
}

export default CardsContainer
