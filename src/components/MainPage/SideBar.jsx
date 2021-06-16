import React, {useState} from 'react';
import '../../styles/style.scss';
import { NavLink } from 'react-router-dom';
import {  FaPlusSquare, FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";

import { Box, HStack, Icon } from '@chakra-ui/react';


function SideBar() {

	

	return (
			<HStack px="5%" justifyContent="space-between" bgColor="brand.primary" zIndex="20" position="fixed" bottom="0" w="100vw" h="60px" >
			{/* <NavLink  exact to="/" >
				<Icon fontSize="28px" as={FaHome} />
				</NavLink> */}
			<NavLink  exact to="/post" >
				<Icon fontSize="28px" as={FaPlusSquare} />
				</NavLink>
			<NavLink  exact to="/my-pets" >
				<Icon fontSize="28px" as={FaClipboardList} />
				</NavLink>
			<NavLink  exact to="/map" >
			<Icon fontSize="28px" as={FaMapMarkedAlt} />
			</NavLink>
		</HStack>
		// <div className="d-flex flex-column sidebar">
		// 	<ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
		// 		<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/" activeClassName="active"><FaHome style={{ height: '24px', width: '24px' }} /></NavLink></li>
		// 		<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/post" activeClassName="active"><FaPlusSquare style={{ height: '24px', width: '24px' }} /></NavLink></li>
		// 		<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/my-pets" activeClassName="active"><FaClipboardList style={{ height: '24px', width: '24px' }} /></NavLink></li>
		// 		<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/map" activeClassName="active"><FaMapMarkedAlt style={{ height: '24px', width: '24px' }} /></NavLink></li>
		// 	</ul>

		// 	<div className="dropdown border-top">
		// 		<a href="/#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
		// 			<img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
		// 		</a>
		// 		<ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
		// 			{/* <li><a className="dropdown-item" href="/#">Perfil</a></li> */}
		// 			<li><Link className="dropdown-item" to="" onClick={ handleClickLogout }>Sign out</Link></li>
		// 		</ul>
		// 	</div>
		// </div>
	)
}

export default SideBar
