import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Feedbacktable from '../components/FeedbackTable';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import Page from '@/components/Page';

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
            {data.feedback.length ? (<Feedbacktable feedback={data.feedback} />) : (<FeedbackEmptyState />)}
        </DashboardShell>
    )


}

const MyFeedbackPage = () => (
    <Page name="My Feedback" path="/feedback">
        <MyFeedback />
    </Page>
)

export default MyFeedbackPage