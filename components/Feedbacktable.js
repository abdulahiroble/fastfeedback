import React from 'react';
import { Box, Code } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';


const Feedbacktable = ({ allFeedback }) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Feedback</Th>
                    <Th>Route</Th>
                    <Th>Visible</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {allFeedback.map((feedback) => (
                    <Box as="tr" key={feedback.id}>
                        <Td fontWeight="bold">
                            {feedback.name}
                        </Td>
                        <Td>
                            {feedback.text}
                        </Td>
                        <Td>
                            <Code>{`/`}</Code>
                        </Td>
                        <Td>
                            {'Remove'}
                        </Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
}

export default Feedbacktable