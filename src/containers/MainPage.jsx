
import { Box} from '@chakra-ui/layout'
import React from 'react'
import ArrowUpMainPage from '../components/MainPage/ArrowUpMainPage'
import CardsContainer from '../components/MainPage/CardsContainer'

import HeaderMainPage from '../components/MainPage/HeaderMainPage.jsx'

function MainPage() {
    return (
        <Box>
            <HeaderMainPage/>
            <ArrowUpMainPage/>
            <CardsContainer/>
        </Box>
        
    )
}

export default MainPage
