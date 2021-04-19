import { useAuth } from '@/lib/auth'
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import fetcher from 'utils/fetcher';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import FeedbackTable from '@/components/FeedbackTable';


const MyFeedback = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher)

    if (!data) {
        return <DashboardShell>
            <FeedbackTableSkeleton />
        </DashboardShell>
    }

    return (
        <DashboardShell>
            {data.feedback.length ? (<FeedbackTable allFeedback={data.feedback} />) : (<EmptyState />)}
        </DashboardShell>
    )


}

export default MyFeedback