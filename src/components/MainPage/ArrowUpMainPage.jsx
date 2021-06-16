import Icon from '@chakra-ui/icon'
import { Center } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ArrowUpMainPage() {
    return (
        <Center cursor="pointer" onClick={()=>window.scrollTo({
            top:0,
            behavior: "smooth"
        })} height="40px" width="40px" borderRadius="20px" backgroundColor="black" zIndex="10" position="fixed" bottom="70px" right="20px" >
            <Icon color="white" fontSize={20} as={FaArrowUp} />
        </Center>
    )
}

export default ArrowUpMainPage
