import { useAuth } from '@/lib/auth'
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"

const Dashboard = () => {
    const auth = useAuth();

    if (!auth.user) {
        return <DashboardShell>
            <SiteTableSkeleton />
        </DashboardShell>
    }

    return <DashboardShell>
        <EmptyState />
    </DashboardShell>


}

export default Dashboard