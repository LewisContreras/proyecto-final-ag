import { Box } from "@chakra-ui/layout";
import React from "react";
import ArrowUpMainPage from "../components/MainPage/ArrowUpMainPage";
import CardsContainer from "../components/MainPage/CardsContainer";
import SideBar from "../components/MainPage/SideBar.jsx";
import Navbar from "../components/MainPage/Navbar.jsx"

function MainPage() {
    return (
        <Box>
            <Navbar />
            <div className="flex">
                <SideBar />
                <div className="content">
                    <CardsContainer />
                    <ArrowUpMainPage />
                </div>
            </div>
        </Box>
    );
}

export default MainPage;
