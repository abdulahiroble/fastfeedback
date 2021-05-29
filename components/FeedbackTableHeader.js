import React from 'react'
import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Box
} from '@chakra-ui/react'

const FeedbackTableHeader = ({ siteName }) => (
    <Box mx={4}>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink>Feedback</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink>{siteName}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
            <Heading mb={8}>{siteName}</Heading>
        </Flex>
    </Box>
)

export default FeedbackTableHeader
