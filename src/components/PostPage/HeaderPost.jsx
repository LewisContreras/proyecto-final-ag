import Icon from '@chakra-ui/icon'
import { HStack, Link } from '@chakra-ui/layout'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom';

function HeaderPost() {
    return (
        <HStack top="0" width="100%" padding={6} height="60px" backgroundColor="#33A109" >
            <Link to="/" as={ReachLink} >
                <Icon fontSize={30} color="white" as={FaHome} />
            </Link>
        </HStack>
    )
}

export default HeaderPost
