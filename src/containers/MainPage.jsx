import { Box } from "@chakra-ui/layout";
import React from "react";
import ArrowUpMainPage from "../components/MainPage/ArrowUpMainPage";
import CardsContainer from "../components/MainPage/CardsContainer";
import SideBar from "../components/MainPage/SideBar.jsx";
import Navbar from "../components/MainPage/Navbar.jsx"
import HeaderMainPage from "../components/MainPage/HeaderMainPage";

function MainPage() {
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
