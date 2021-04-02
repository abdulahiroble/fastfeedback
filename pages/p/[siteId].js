export async function getStaticProps(context) {
    return {
        props: {
            initialFeedback: []
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    siteId: "X4WcWjVWWkrZVbIeiGOF"
                }
            }
        ],
        fallback: false
    };
}

const SiteFeedback = () => {
    return "Hello, World!"
}

export default SiteFeedback
