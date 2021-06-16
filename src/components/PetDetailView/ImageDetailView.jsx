import Icon from '@chakra-ui/icon'
import { Center } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'


function ImageDetailView() {
    const detail = useSelector(state => state.petsInfo.detail)
    const history = useHistory()
    return (
        <Box display="flex" width={["100vw", "100vw", "60vw"]} position="relative"
            backgroundImage={`url(${detail.url})`}
            // backgroundImage="url('https://thumbs.dreamstime.com/b/modelo-incons%C3%BAtil-de-las-huellas-verdes-del-perro-96804341.jpg')"
            height={["50vh", "50vh", "100vh"]} backgroundPosition="center" backgroundRepeat="repeat" backgroundSize="cover"
        >
            {/* <Img  src={detail.url} objectFit="cover" /> */}
            <Center onClick={() => history.goBack()} cursor="pointer" boxSize={10} borderRadius="50%" backgroundColor="#33A109" position="absolute" top="20px" left="20px">
                <Icon color="white" as={FaArrowLeft} />
            </Center>

        </Box>
    )
}

export default ImageDetailView
