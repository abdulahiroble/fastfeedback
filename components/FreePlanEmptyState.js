import React from 'react'
import {
    Heading,
    Icon,
    Text,
    Button,
    Box
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
    <DashboardShell>
        <Box
            backgroundColor="white"
            p={8}
            display="block"
            flexDirection="row"
            borderRadius="8px"
        >
            <Heading size="md">Get feedback on your site instantly.</Heading>
            <Text>Start today, then grow with us 🌱</Text>
            <Button variant="solid" size="md">
                Upgrade to starter
            </Button>
        </Box>
    </DashboardShell>
)

export default FreePlanEmptyState