import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import { createCheckoutSession, goToBillingPortal } from '@/lib/db';
import {
    Avatar,
    Heading,
    Box,
    Button,
    Flex,
    Text,
    Badge,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
} from '@chakra-ui/react';
import { useState } from 'react';

const FeedbackUsage = () => (
    <StatGroup>
        <Stat>
            <StatLabel color="gray.700">Feedback</StatLabel>
        </Stat>
    </StatGroup>
)

const SettingsTable = ({ stripeRole, children }) => (
    <Box
        backgroundColor="white"
        mt={8}
        borderRadius={[0, 8, 8]}
        boxShadow="0px 4px 10px rgba(0,0,0,0.05)">
        <Flex
            backgroundColor="gray.50"
            borderTopLeftRadius={[0, 8, 8]}
            borderTopRightRadius={[0, 8, 8]}
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            px={6}
            py={4}
        >
            <Flex justify="space-between" align="center" w="full">
                <Text
                    textTransform="uppercase"
                    fontSize="xs"
                    color="gray.500"
                    fontWeight="medium"
                    mt={1}
                >
                    Settings
                </Text>
                <Badge h="1rem" variantColor="blue">
                    {stripeRole}
                </Badge>
            </Flex>
        </Flex>
        <Flex direction="column" p={6}>
            {children}
        </Flex>
    </Box>
)

const Account = () => {
    const { user, signout } = useAuth();
    const [isCheckoutLoading, setCheckoutloading] = useState(false);
    const [isBillingLoading, setBillingLoading] = useState(false);

    return (<DashboardShell>
        <Flex direction="column"
            maxW="600px"
            align={['left', 'center']}
            margin="0 auto">
            <Flex direction="column" align={['left', 'center']} ml={4}>
                <Avatar
                    w={['3rem', '6rem']}
                    h={['3rem', '6rem']}
                    mb={4}
                    src={user?.photoUrl}
                />
                <Heading letterSpacing="-1px">{user?.name}</Heading>
                <Text>{user?.email}</Text>
            </Flex>

            <SettingsTable>



                <FeedbackUsage />

                <Text my={4}>
                    Fast Feedback uses Stripe to update, change, or cancel your
                    subscription. You can also update card information and billing
                    addresses through the secure portal.
                </Text>

            </SettingsTable>

            <Button backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                _hover={{ bg: 'gray.700' }}
                isLoading={isCheckoutLoading}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                }} mt={4} size="lg" onClick={(e) => {
                    setCheckoutloading(true);
                    createCheckoutSession(user.uid)
                }}>Upgrade to Starter
            </Button>
            <Button backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                ml={4}
                isLoading={isBillingLoading}
                _hover={{ bg: 'gray.700' }}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                }} mt={4} size="lg" onClick={(e) => {
                    setBillingLoading(true);
                    goToBillingPortal()
                }}> View Billing Portal
            </Button>
            <Button ml={4} onClick={() => signout()}>
                Log Out
            </Button>
        </Flex>
    </DashboardShell>)


}

export default Account