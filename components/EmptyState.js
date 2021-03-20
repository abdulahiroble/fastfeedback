import React from 'react'
import {
    Heading,
    Icon,
    Text,
    Button,
    Box
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const EmptyState = () => (
    <DashboardShell>
        <Box
            backgroundColor="white"
            p={8}
            display="block"
            flexDirection="row"
            borderRadius="8px"
        >
            <Heading size="md">You haven't added any sites</Heading>
            <Text>Welcome, let's get started.</Text>
            <Button variant="solid" size="md">
                Add your first site
            </Button>
        </Box>
    </DashboardShell>
)

export default EmptyState