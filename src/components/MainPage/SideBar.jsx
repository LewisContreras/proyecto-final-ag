import React from 'react';
import '../../styles/style.scss';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaMapMarkedAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

function SideBar() {

	const dispatch = useDispatch();

    const handleClickLogout = () => {
        dispatch(startLogout())
    }
	return (
		<div className="d-flex flex-column sidebar">
			<ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
				<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/" activeClassName="active"><FaHome style={{ height: '24px', width: '24px' }} /></NavLink></li>
				<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/post" activeClassName="active"><FaPlusSquare style={{ height: '24px', width: '24px' }} /></NavLink></li>
				<li className="nav-item"><NavLink className="nav-link text-light w-100 d-inline-block" exact to="/s" activeClassName="active"><FaMapMarkedAlt style={{ height: '24px', width: '24px' }} /></NavLink></li>
				<li className="nav-item"></li>
			</ul>
			{/* <div
			 className="border-top">
				 <NavLink className="nav-link text-light w-100 d-inline-block"  exact to="/p" activeClassName="active"><MdAccountCircle style={{height: '24px', width: '24px'}} /></NavLink>
			 </div> */}

			<div className="dropdown border-top">
				<a href="/#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
				</a>
				<ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
					<li><a className="dropdown-item" href="/#">Perfil</a></li>
					<li><Link className="dropdown-item" to="" onClick={ handleClickLogout }>Sign out</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default SideBar
