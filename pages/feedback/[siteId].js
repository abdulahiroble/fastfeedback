import { useAuth } from '@/lib/auth'
import DashboardShell from "@/components/DashboardShell"
import useSWR from "swr"
import fetcher from 'utils/fetcher';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import Page from '@/components/Page';
import { useRouter } from 'next/router';
import Feedbacktable from '@/components/FeedbackTable';

const SiteFeedback = () => {
    const { user } = useAuth();
    const query = useRouter()
    const { data } = useSWR(user ? [`/api/feedback/${query.siteId}`, user.token] : null, fetcher)

    if (!data) {
        return <DashboardShell>
            <FeedbackTableHeader siteName="Test Site" />
            <FeedbackTableSkeleton />
        </DashboardShell>
    }

    return (
        <DashboardShell>
            <FeedbackTableHeader siteName="Test Site" />
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