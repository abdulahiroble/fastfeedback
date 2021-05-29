import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from './Table';
import { useState } from 'react';
import { updateFeedback } from '@/lib/db';
import { mutate } from 'swr';
import { useAuth } from '@/lib/auth';
import DeleteFeedbackButton from './DeleteFeedbackButton';

const FeedbackRow = ({ id, author, text, route, status }) => {

    const auth = useAuth()

    const isChecked = status === "active"

    console.log(status, id)
    const toggleFeedback = async () => {
        // setChecked(!checked)
        await updateFeedback(id, { status: !isChecked ? "active" : "pending" })

        mutate(["/api/feedback", auth.user.token])

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
                    isChecked={isChecked} />
            </Td>
            <Td>
                <DeleteFeedbackButton feedbackId={id} />
            </Td>
        </Box>
    );
}

export default FeedbackRow