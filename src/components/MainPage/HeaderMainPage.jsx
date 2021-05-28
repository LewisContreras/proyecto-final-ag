import React from 'react'
import {FaPaw, FaSearch} from "react-icons/fa"
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import {HStack, Link } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'


function HeaderMainPage() {
    return (
        <HStack px={4} spacing={8} backgroundColor="#33A109"  height="80px" position="fixed" top="0" left="0" right="0" >
            <Icon fontSize={20} color="white" as={FaPaw}  />
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<FaSearch />}
                />
                <Input type="text" placeholder="Search" color="black" backgroundColor="white" />
            </InputGroup>
            <Link color="white" >Publicar</Link>
        </HStack>
    )
}

export default HeaderMainPage
