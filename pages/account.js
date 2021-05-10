import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import { createCheckoutSession } from '@/lib/db';
import { Button } from '@chakra-ui/react';

const Account = () => {
    const { user } = useAuth();
    // const { data } = useSWR(user ? ["/api/user", user.token] : null, fetcher)

    // if (!data) {
    //     return <DashboardShell>
    //         <SiteTableHeader />
    //         <SiteTableSkeleton />
    //     </DashboardShell>
    // }

    return (<DashboardShell>
        <Button backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            _hover={{ bg: 'gray.700' }}
            _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
            }} mt={4} size="lg" onClick={(e) => createCheckoutSession(user.uid)}>Upgrade to Starter
        </Button>
    </DashboardShell>)


}

export default Account