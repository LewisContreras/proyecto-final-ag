import React, { useState } from 'react'
import HeaderPost from '../PostPage/HeaderPost'
import { Box, Center } from '@chakra-ui/layout'
import { Divider } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { startDeleting, activePet } from '../actions/pets';
import Typewriter from 'typewriter-effect';

function PetList() {

	const dispatch = useDispatch();
	const { myPets } = useSelector(state => state.pets);
	const [currentPage, setCurrentPage] = useState(1)
	const perPage = 4;

	let data = myPets.slice((currentPage - 1) * perPage, currentPage * perPage);

	let ellipsisLeft = false;
	let ellipsisRight = false
	const pages = Math.ceil(myPets.length / perPage)
	const pagination = [];

	for (let i = 1; i <= pages; i++) {
		if (i === currentPage) {
			pagination.push(
				{ id: i, ellipsis: false }
			);
		} else {
			if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
				pagination.push(
					{ id: i, ellipsis: false }
				);
			} else if (i > 1 && i < currentPage && !ellipsisLeft) {
				pagination.push(
					{ id: i, ellipsis: true }
				);
				ellipsisLeft = true;
			} else if (i < pages && i > currentPage && !ellipsisRight) {
				pagination.push(
					{ id: i, ellipsis: true }
				);
				ellipsisRight = true;
			}
		}
	}

	const changePage = (e, page) => {
		e.preventDefault()
		setCurrentPage(page)
	}


	const deletePet = (e, id) => {
		dispatch(startDeleting(id));
	}

	const handleEdit = (e, pet) => {
		dispatch(
			activePet(
				pet.id,
				{
					...pet
				}
			)
		)
	}

	return (
		<div className="scene_element scene_element--fadeinright">
			<HeaderPost />
			<Center flexDirection="column" pt="10px" backgroundColor="#77D353" minHeight="93vh">
				<div className="lista-peliculas col-md-8 mx-auto text-center">
				<Divider />
					<Box textStyle="h1">
						<Typewriter
                                options={{
                                    strings: ["Administrar Mascotas Reportadas"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
					</Box>
					<Divider />
					<table className="table mt-5">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Estado</th>
								<th>Imagen</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{
								data.map(pet => (
									<tr key={pet.id}>
										<td valign="middle">{pet.name}</td>
										<td valign="middle">{pet.state}</td>
										<td valign="middle"><img
											src={pet.url}
											alt="Img"
											style={{ height: '70px' }}
										/>
										</td>
										<td valign="middle">
											<div className="col">
												<span className="btn btn-danger me-2" aria-hidden="true" onClick={(e) => { deletePet(e, pet.id) }} style={{ cursor: 'pointer' }}>&times;</span>
												<Link to={`/my-pets/${pet.name}`}><span className="btn btn-primary" aria-hidden="true" onClick={(e) => { handleEdit(e, pet) }} style={{ cursor: 'pointer' }}><FaEdit /></span></Link>
											</div>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>

					<nav className="navigation">
						<ul className="pagination justify-content-center">
							{pagination.map(page => {
								if (!page.ellipsis) {
									return <li className="page-item" key={page.id}>
										<a
											href="/#"
											className="page-link"
											onClick={(e) => changePage(e, page.id)}
										>
											{page.id}
										</a>
									</li>
								} else {
									return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
								}
							})}
						</ul>
					</nav>
				</div>

			</Center>
		</div>
	)
}

export default PetList
