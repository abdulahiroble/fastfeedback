import React from 'react'
import { TriangleUpIcon } from '@chakra-ui/icons'

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

import { useAuth } from "@/lib/auth"

const DashboardShell = ({ children }) => {

    const { user, signout } = useAuth();

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
                <Link>Sites</Link>
                <Link display="block">Feedback</Link>
            </Stack>
            <Flex
                justifyContent="center"
                alignItems="center"
            >
                {user && (<Button variant="ghost" mr={2} onClick={() => signout()}>
                    Log out
                </Button>)}
                <Avatar size="sm" src={user?.photoUrl} />
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
                <Flex justifyContent="space-between">
                    <Heading mb={8}>My Sites</Heading>
                    <Button
                        backgroundColor="gray.900"
                        color="white"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.700' }}
                        _active={{
                            bg: 'gray.800',
                            transform: 'scale(0.95)'
                        }}
                    >
                        + Add Site
                    </Button>
                </Flex>
                {children}
            </Flex>
        </Flex>
    </Flex>
}

export default DashboardShell