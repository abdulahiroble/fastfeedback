import React from 'react'
import { TriangleUpIcon } from '@chakra-ui/icons'
import { useAuth } from "@/lib/auth"

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

const DashboardShell = ({ children }) => {

    const auth = useAuth();

    return <Flex flexDirection="column">
        <Flex
            backgroundColor="white"
            justifyContent="space-between"
            alignItems="center"
            py={4}
            px={8}
        >
            <Stack spacing={4} flexDirection="row" isInline align="center">
                <TriangleUpIcon size="24px" />
                {/* <Icon name="logo" /> */}
                <Link display="block">Feedback</Link>
                <Link>Sites</Link>
            </Stack>
            <Flex
                justifyContent="flex-start"
                flexDirection="row"
                alignItems="center"
            >
                <Link pr={4}>Account</Link>
                <Avatar size="sm" src={auth.user.photoUrl} />
            </Flex>
        </Flex>
        <Flex flexDirection="row" backgroundColor="gray.50" p={8} height="100vh">
            <Flex
                maxWidth="800px"
                w="100%"
                direction="column"
                ml="auto"
                mr="auto"
            >
                <Breadcrumb>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink color="gray.700" fontSize="sm">Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Heading color="black" mb={4}>Sites</Heading>
                {children}
            </Flex>
        </Flex>
    </Flex>
}

export default DashboardShell