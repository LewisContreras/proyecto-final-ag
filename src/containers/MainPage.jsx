import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef } from "react";
import ArrowUpMainPage from "../components/MainPage/ArrowUpMainPage";
import CardsContainer from "../components/MainPage/CardsContainer";
import SideBar from "../components/MainPage/SideBar.jsx";
import Navbar from "../components/MainPage/Navbar.jsx"
import HeaderMainPage from "../components/MainPage/HeaderMainPage";
import { petStartSearchInfo } from "../components/actions/petsInfoActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

function MainPage() {

    const mounted = useRef(false)
    const dispatch = useDispatch()
    const uid = useSelector(state => state.auth.uid)

    const handleScroll = (e)=>{
        let scrollTop = document.scrollingElement.scrollTop
        let scrollHeight = document.scrollingElement.scrollHeight
        let viewport = document.scrollingElement.clientHeight
        if(scrollTop + viewport + 0.5 > scrollHeight  ){
            // console.log("Estamos abajo");
            // dispatch(petStartSearchInfo())
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        if(!mounted.current){
            dispatch(petStartSearchInfo())
            mounted.current = true
        }
        
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
        
    }, [uid])


    return (
        <Box>
            {/* <Navbar /> */}
            <HeaderMainPage/>
            <SideBar />
            <CardsContainer />
            <ArrowUpMainPage />
             
        </Box>
    );
}

export default MainPage;
