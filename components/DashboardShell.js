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
                <Icon name="logo" size="24px" mr={8} />
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
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Heading color="black" mb={4}>Sites</Heading>
                {children}
            </Flex>
        </Flex>
    </Flex>
)

export default DashboardShell