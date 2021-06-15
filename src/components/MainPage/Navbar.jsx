import React from 'react';
import Icon from '@chakra-ui/icon';
import { FaPaw } from 'react-icons/fa';
import '../../styles/style.scss';

function Navbar() {
	return (
		<div className="navbar navbar-light">
			<div className="container-fluid">
				<Icon fontSize={20} color="white" as={FaPaw} />
				<div className="navbar" id="navbarSupportedContent">
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-light" type="submit">Search</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Navbar
