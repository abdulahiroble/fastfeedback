import { useAuth } from '@/lib/auth'
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import SiteTable from "@/components/SiteTable"
import SiteTableHeader from '@/components/SiteTableHeader';
import fetcher from 'utils/fetcher';
import UpgradeEmptyState from '@/components/UpradeEmptyState';

const Dashboard = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher)
    const isPaidAccount = false;

    if (!data) {
        return <DashboardShell>
            <SiteTableHeader />
            <SiteTableSkeleton />
        </DashboardShell>
    }

    if (data.sites.length) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTable sites={data.sites} />
            </DashboardShell>
        )
    }



    return (<DashboardShell>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        {isPaidAccount ? <EmptyState /> : <UpgradeEmptyState />}
    </DashboardShell>)


}

export default Dashboard