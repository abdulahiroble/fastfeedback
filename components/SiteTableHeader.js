import React from 'react'
import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const SiteTableHeader = ({ isPaidAccount }) => (
    <>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
            <Heading mb={8}>My Sites</Heading>
            {isPaidAccount && <AddSiteModal>
                + Add Site
            </AddSiteModal>}
        </Flex>
    </>
)

export default SiteTableHeader
