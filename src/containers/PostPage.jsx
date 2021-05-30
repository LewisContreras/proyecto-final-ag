import { Box } from '@chakra-ui/layout'
import React from 'react'
import ContentPost from '../components/PostPage/ContentPost'
import HeaderPost from '../components/PostPage/HeaderPost'

function PostPage() {
    return (
        <Box>
            <HeaderPost/>
            <ContentPost/>
        </Box>
    )
}

export default PostPage
