import React from 'react'
import NextLink from "next/link"
import { TriangleUpIcon, Icon } from '@chakra-ui/icons'
import { Logo } from "@/styles/icons"
import {
    Flex,
    Stack,
    Link,
    Avatar,
    Button,
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
                <NextLink href="/" passHref>
                    <Logo color="black" boxSize="24px" />
                </NextLink>

                <NextLink href="/dashboard" passHref>
                    <Link>Sites</Link>
                </NextLink>

                <NextLink href="/feedback" passHref>
                    <Link >Feedback</Link>
                </NextLink>


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
                margin="0 auto" direction="column" maxW="1250px" px={8}
            >
                {children}
            </Flex>
        </Flex>
    </Flex>
}

export default DashboardShell