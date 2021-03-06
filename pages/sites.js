import { useAuth } from '@/lib/auth'
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import SiteTable from "@/components/SiteTable"
import SiteTableHeader from '@/components/SiteTableHeader';
import fetcher from 'utils/fetcher';
import UpgradeEmptyState from '@/components/UpradeEmptyState';
import Page from '@/components/Page';

const Dashboard = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher)
    const isPaidAccount = user?.stripeRole == 'premium'; // change back to false once you sorted out upgrading to premium and it's reflected in the database

    if (!data) {
        return <DashboardShell>
            <SiteTableHeader />
            <SiteTableSkeleton />
        </DashboardShell>
    }

    if (data.sites.length) {
        return (
            <DashboardShell>
                <SiteTableHeader isPaidAccount={isPaidAccount} />
                <SiteTable sites={data.sites} />
            </DashboardShell>
        )
    }



    return (<DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        {isPaidAccount ? <EmptyState /> : <UpgradeEmptyState />}
    </DashboardShell>)


}

const DashboardPage = () => (
    <Page name="Dashboard" path="/sites">
        <Dashboard />
    </Page>
)

export default DashboardPage