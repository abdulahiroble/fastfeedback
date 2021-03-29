import React from 'react'
import {
    Heading,
    Icon,
    Text,
    Button,
    Box,
    Flex
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const EmptyState = () => (
    <DashboardShell>
        <Flex
            width="100%"
            backgroundColor="white"
            borderRadius="8px"
            p={16}
            justify="center"
            direction="column"
            align="center"
        >
            <Heading size="md" mb={2}>You haven't added any sites</Heading>
            <Text mb={4}>Let's get started</Text>
            <Button variant="solid" size="md" fontWeight="medium">
                Add your first site
            </Button>
        </Flex>
    </DashboardShell>
)

export default EmptyState