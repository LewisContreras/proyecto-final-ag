import React from 'react'
import { FaPaw, FaSearch } from "react-icons/fa"
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { HStack } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { GiExitDoor} from "react-icons/gi";
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'

function HeaderMainPage() {

    const dispatch = useDispatch();


    const handleClickLogout = () => {
        dispatch(startLogout())
    }

    return (
 
            <HStack id="header-main-page" px="5%" spacing={8} backgroundColor="#33A109" height="80px" position="fixed" zIndex="20" top="0" left="0" right="0" >
            <Icon fontSize={20} color="white" as={FaPaw} />
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none" color="black"
                    children={<FaSearch />}
                />
                <Input borderRadius="10px 0 0 10px" type="text" placeholder="Search" color="black" backgroundColor="white" />
                <Button borderRadius="0 10px 10px 0" bgColor="#237006" >Buscar</Button>
            </InputGroup>
            <Icon onClick={ handleClickLogout } fontSize="28px" color="white" as={GiExitDoor} />
        </HStack>

    )
}

export default HeaderMainPage
