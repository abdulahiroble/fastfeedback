import React from 'react';
import { Box, Code, Switch, IconButton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { DeleteIcon } from '@chakra-ui/icons'
import RemoveButton from './RemoveButton';

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
                            {feedback.author}
                        </Td>
                        <Td>
                            {feedback.text}
                        </Td>
                        <Td>
                            <Code>{`/`}</Code>
                        </Td>
                        <Td>
                            <Switch variantcolor="green" defaultIsChecked={feedback.status == "active"} />
                        </Td>
                        <Td>
                            <RemoveButton feedbackId={feedback.id} />
                        </Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
}

export default Feedbacktable