import React from 'react'
import {
    Flex,
    Stack,
    Icon,
    Link,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
    Button,
    Box
} from '@chakra-ui/react'

const DashboardShell = ({ children }) => (
    <Flex flexDirection="column">
        <Flex
            flexDirection="row"
            backgroundColor="white"
            justifyContent="space-between"
            alignItems="center"
            p={4}
        >
            <Stack spacing={4} flexDirection="row" isInline>
                <Icon name="logo" color="black" display="block" />
                <Link display="block">Feedback</Link>
                <Link>Sites</Link>
            </Stack>
            <Flex
                justifyContent="flex-start"
                flexDirection="row"
                alignItems="center"
            >
                <Link pr={4}>Account</Link>
                <Avatar size="sm" />
            </Flex>
        </Flex>
        <Flex flexDirection="row" backgroundColor="gray.50" p={8} height="100%">
            <Flex
                maxWidth="800px"
                justifyContent="center"
                alignItems="center"
                ml="auto"
                mr="auto"
            >
                <Breadcrumb>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                    <Heading>Sites</Heading>
                    {children}
                </Breadcrumb>
            </Flex>
        </Flex>
    </Flex>
)

export default DashboardShell