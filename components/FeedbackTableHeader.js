import React from 'react'
import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react'

const FeedbackTableHeader = () => (
    <>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink>Feedback</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
            <Heading mb={8}>My Feedback</Heading>
        </Flex>
    </>
)

export default FeedbackTableHeader