import { Flex } from '@chakra-ui/layout'
import React from 'react'
import EachPetCard from './EachPetCard.jsx'

function CardsContainer() {
    return (
        <Flex justifyContent="space-between" wrap="wrap" mt="100px" width="90%" mx="auto">
            {
                Array(8).fill("").map(el => <EachPetCard/>)
            }
            
        </Flex>
    )
}

export default CardsContainer
