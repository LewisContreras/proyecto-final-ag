import Icon from '@chakra-ui/icon'
import { Center } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ArrowUpMainPage() {
    return (
        <Center onClick={()=>window.scrollTo({
            top:0,
            behavior: "smooth"
        })} height="40px" width="40px" backgroundColor="#33A109" position="fixed" bottom="0" right="40px" >
            <Icon color="white" fontSize={20} as={FaArrowUp} />
        </Center>
    )
}

export default ArrowUpMainPage
