import { useAuth } from '@/lib/auth'
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from "../utils/fetcher"
import FeedbackTable from "@/components/SiteTable"

const MyFeedback = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher)

    if (!data) {
        return <DashboardShell>
            <SiteTableSkeleton />
        </DashboardShell>
    }

    return (<DashboardShell>
        {data.sites ? <FeedbackTable allFeedback={data.feedback} /> : <EmptyState />}
    </DashboardShell>)


}

export default MyFeedback