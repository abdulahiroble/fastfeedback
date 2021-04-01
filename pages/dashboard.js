import { useAuth } from '@/lib/auth'
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState"

const Dashboard = () => {
    const auth = useAuth();

    if (!auth.user) {
        return <SiteTableSkeleton />
    }

    return <EmptyState />


}

export default Dashboard