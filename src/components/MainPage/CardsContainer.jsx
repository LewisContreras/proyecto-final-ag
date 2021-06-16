import { Flex, Link } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import "../../styles/animations.css"
import { useDispatch, useSelector } from 'react-redux';
import {db} from "../../firebase/firebase-config"
import { petDetail, petSearchInfo } from '../actions/petsInfoActions.js';

function CardsContainer() {
    const dispatch = useDispatch()
    const info = useSelector(state => state.petsInfo.info)
    useEffect(() => {
        let pets = []
        db.collection("Data/pets/pet").get().then(snap =>{


            snap.forEach(hijo => {
                pets.push({
                    id:hijo.id,
                    ...hijo.data()
                })
            });
            console.log(pets)
            dispatch(petSearchInfo(pets))
        })
    }, [])


    return (
        <Grid pt="80px" mb="80px" templateColumns="repeat(auto-fill,160px)" gap="10px" justifyContent="space-evenly" mt="20px" width={["100%","90%"]} mx="auto" pb="20px"   >
            {   
                !info.length
                ?null
                :info.map((el, index) => <Link display="inline-block" _hover={{
                    textDecoration:"none",
                    transform: "scale(1.03)"
                }} textDecoration="none" key={index} as={ReachLink} to={`/detail/${el.id}`} onClick={()=>dispatch(petDetail(el))}><EachPetCard id={index} pet={el} /></Link> )
            }
        </Grid>
    )
}

export default CardsContainer
