import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from './Table';
import RemoveButton from './RemoveButton';
import { useState } from 'react';
import { updateFeedback } from '@/lib/db';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';

const FeedbackRow = ({ id, author, text, route }) => {
    const auth = useAuth()
    const [checked, setChecked] = useState();

    console.log(status, id)
    const toggleFeedback = async () => {
        // setChecked(!checked)
        await updateFeedback(id, { status: !checked ? "active" : "pending" })

        mutate(["/api/feedback", auth.user.token])

        // mutate(["/api/feedback", auth.user.token],
        //     async (data) => {

        //         const currentFeedback = data.feedback.find((feedback) => feedback.id)

        //         const allOtherFeedback = data.feedback.filter(
        //             (feedback) => feedback.id !== id
        //         )

        //         updateFeedback.status = !checked;

        //         return {
        //             feedback: data.feedback.filter(
        //                 (feedback) => feedback.id !== allOtherFeedback
        //             )
        //         }
        //     }, false)
    }

    return (
        <Box as="tr" key={id}>
            <Td fontWeight="bold">
                {author}
            </Td>
            <Td>
                {text}
            </Td>
            <Td>
                <Code>{route || `/`}</Code>
            </Td>
            <Td>
                <Switch
                    colorScheme="green"
                    onClick={toggleFeedback}
                    onChange={toggleFeedback}
                    isChecked={checked} />
            </Td>
            <Td>
                <RemoveButton feedbackId={id} />
            </Td>
        </Box>
    );
}

export default FeedbackRow