import { useAuth } from '@/lib/auth'
import EmptyState from "@/components/EmptyState"
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Feedbacktable from '@/components/FeedbackTable';

const MyFeedback = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher)

    if (!data) {
        return <DashboardShell>
            <FeedbackTableHeader />
            <FeedbackTableSkeleton />
        </DashboardShell>
    }

    return (
        <DashboardShell>
            <FeedbackTableHeader />
            {data.feedback.length ? (<Feedbacktable allFeedback={data.feedback} />) : (<EmptyState />)}
        </DashboardShell>
    )


}

export default MyFeedback