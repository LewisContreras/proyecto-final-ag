import React from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { HStack } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { GiExitDoor } from "react-icons/gi";
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { Text } from '@chakra-ui/react';
import { useHistory } from 'react-router';

function HeaderChatMessages() {

    const dispatch = useDispatch();
    const history = useHistory()

    const handleClickLogout = () => {
        dispatch(startLogout())
    }

    return (
        <HStack id="header-main-page" px="5%" justifyContent="space-between" backgroundColor="#33A109" height="80px" position="fixed" zIndex="20" top="0" left="0" right="0" >
            <Icon cursor="pointer" onClick={()=>history.goBack()} fontSize={20} color="white" as={FaArrowLeft} />
            <Text>FindPets</Text>
            <Icon onClick={handleClickLogout} cursor="pointer" fontSize="28px" color="white" as={GiExitDoor} />
        </HStack>

    )
}

export default HeaderChatMessages