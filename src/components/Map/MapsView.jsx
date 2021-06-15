import React, { useState, useEffect } from 'react'
import { HStack, Link } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { Link as ReachLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup, icon } from 'react-leaflet'
import '../../styles/map.css'
import { useSelector, useDispatch } from 'react-redux'
import L from 'leaflet';

let pos = 0;

const getPos = () => {
	navigator.geolocation.getCurrentPosition(function (position) {
		pos = [position.coords.latitude, position.coords.longitude]
	});
}

getPos()


function MapsView() {

	const { pets } = useSelector(state => state.pets)

	var lost = L.icon({
		iconUrl: 'https://res.cloudinary.com/dwebgvcn6/image/upload/v1623783382/g48_ulieoq.png',


	});

	return (

		<div>
			<HStack top="0" width="100%" padding={6} height="60px" backgroundColor="#33A109" >
				<Link to="/" as={ReachLink} >
					<Icon fontSize={30} color="white" as={FaArrowLeft} />
				</Link>
			</HStack>
			<div>

				<MapContainer center={pos} zoom={15} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{
						pets.map(pet => (
							<Marker icon={lost}
								key={pet.id}
								position={[pet.latitude, pet.longitude]}>
								<Popup position={[pet.latitude, pet.longitude]}>
									<div>
										<p className="text-center">{pet.name}</p>
										<img src={pet.url} alt="" />
										<small>{pet.state}</small>
									</div>
								</Popup>
							</Marker>
						))
					}
				</MapContainer>
			</div>
		</div>
	)
}

export default MapsView
