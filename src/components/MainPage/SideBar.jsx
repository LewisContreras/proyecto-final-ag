import React from 'react';
import '../../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { FaPlusSquare, FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import { HStack, Icon } from '@chakra-ui/react';


function SideBar() {

	

	return (
		<HStack px="5%" justifyContent="space-between" bgColor="brand.primary" zIndex="20" position="fixed" bottom="0" w="100vw" h="60px" >
			<NavLink exact to="/post" >
				<Icon fontSize="28px" as={FaPlusSquare} />
			</NavLink>
			<NavLink exact to="/my-pets" >
				<Icon fontSize="28px" as={FaClipboardList} />
			</NavLink>
			<NavLink exact to="/map" >
				<Icon fontSize="28px" as={FaMapMarkedAlt} />
			</NavLink>
			<NavLink exact to="/chat-messages" >
				<Icon fontSize="28px" as={AiFillMessage} />
			</NavLink>
		</HStack>

	)
}

export default SideBar
