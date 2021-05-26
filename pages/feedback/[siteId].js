import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Feedbacktable from '../components/FeedbackTable';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import Page from '@/components/Page';
import { useRouter } from 'next/router';

const SiteFeedback = () => {
    const { user } = useAuth();
    const query = useRouter()
    const { data } = useSWR(user ? [`/api/feedback/${query.siteId}`, user.token] : null, fetcher)

    if (!data) {
        return <DashboardShell>
            <FeedbackTableHeader />
            <FeedbackTableSkeleton />
        </DashboardShell>
    }

    return (
        <DashboardShell>
            <FeedbackTableHeader />
            {data.feedback.length ? (<Feedbacktable allFeedback={data.feedback} />) : (<FeedbackEmptyState />)}
        </DashboardShell>
    )
}

const SiteFeedbackPage = () => {
    <Page name="Name of site Feedback" path="/feedback/">
        <SiteFeedback />
    </Page>
}

export default SiteFeedbackPage