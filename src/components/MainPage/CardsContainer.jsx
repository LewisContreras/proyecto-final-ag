import { Link, Center } from '@chakra-ui/layout'
import React, { useState } from 'react'
import EachPetCard from './EachPetCard.jsx'
import { Link as ReachLink } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import "../../styles/animations.css"
import { useDispatch, useSelector } from 'react-redux';
import { petDetail } from '../actions/petsInfoActions.js';

function CardsContainer() {

    const dispatch = useDispatch()
    const info = useSelector(state => state.petsInfo.info)
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 6;

    let data = info.slice((currentPage - 1) * perPage, currentPage * perPage);
    let ellipsisLeft = false;
    let ellipsisRight = false
    const pages = Math.ceil(info.length / perPage)
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

    return (
        <>
            <Grid pt="80px" mb="10px" templateColumns="repeat(auto-fill,160px)" gap="10px" justifyContent="space-evenly" mt="20px" width={["100%", "90%"]} mx="auto" pb="20px"   >
                {
                    !info.length
                        ? null
                        :
                        data.map((el, index) =>
                            <Link
                                display="inline-block"
                                _hover={{
                                    textDecoration: "none",
                                    transform: "scale(1.03)"
                                }} textDecoration="none"
                                key={index}
                                as={ReachLink}
                                to={`/detail/${el.id}`}
                                onClick={() => dispatch(petDetail(el))}>
                                <EachPetCard id={index} pet={el} />
                            </Link>)
                }
            </Grid>
            <Grid mb="80px" gap="5px" width={["100%", "90%"]} mx="auto">
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
            </Grid>
        </>


    )
}

export default CardsContainer
