import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import { createCheckoutSession, goToBillingPortal } from '@/lib/db';
import { Button, Box } from '@chakra-ui/react';
import { useState } from 'react';

const Account = () => {
    const { user, signout } = useAuth();
    const [isCheckoutLoading, setCheckoutloading] = useState(false);
    const [isBillingLoading, setBillingLoading] = useState(false);

    // }

    return (<DashboardShell>
        <Box>
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
        </Box>
    </DashboardShell>)


}

export default Account