import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import Feedback from "@/components/Feedback"
import { Box, FormControl, FormLabel, Input, Button, FormHelperText } from '@chakra-ui/react';
import { useAuth } from "@/lib/auth";
import { useRouter } from 'next/router'
import { createFeedback } from "@/lib/db";
import { useRef } from "react";

export async function getStaticProps(context) {
    const siteId = context.params.siteId;

    const feedback = await getAllFeedback(siteId)

    return {
        props: {
            initialFeedback: feedback
        },
    }
}

export async function getStaticPaths() {

    const sites = await getAllSites();
    const paths = sites.map((site) => ({
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
    const auth = useAuth();
    const router = useRouter();
    const inputEl = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault();

        const newFeedback = {
            author: auth.user.name,
            authorId: auth.user.uid,
            siteId: router.query.siteId,
            text: inputEl.current.value,
            createdAt: new Date().toISOString(),
            provider: auth.user.provider,
            status: "pending"
        }

        createFeedback(newFeedback)

    }

    return <Box display="flex" flexDirection="column" width="full" maxWidth="700px" margin="0 auto">

        <Box as="form" onSubmit={onSubmit} >
            <FormControl my={8}>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <Input ref={inputEl} type="comment" id="comment" />
                <Button mt={2} type="submit" fontWeight="medium">
                    Add Comment
                </Button>
            </FormControl>
        </Box>

        {initialFeedback.map((feedback) => (
            <Feedback key={feedback.id} {...feedback} />
        ))}
    </Box>
}

export default SiteFeedback
