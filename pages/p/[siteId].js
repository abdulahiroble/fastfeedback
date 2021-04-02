import { getAllFeedback, getAllSites } from "@/lib/db-admin";

export async function getStaticProps(context) {
    const siteId = context.params.siteId;

    const feedback = await getAllFeedback(siteId)

    return {
        props: {
            initialFeedback: []
        },
    }
}

export async function getStaticPaths() {

    const sites = await getAllSites();
    const paths = sites.map(site => ({
        params: {
            siteId: site.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    };
}

const SiteFeedback = ({ initialFeedback }) => {
    return "Hello, World!"
}

export default SiteFeedback
