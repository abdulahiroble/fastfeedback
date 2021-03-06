import React from 'react';
import { Table, Tr, Th } from './Table';
import FeedbackRow from './FeedbackRow';

const Feedbacktable = (props) => {

    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Feedback</Th>
                    <Th>Route</Th>
                    <Th>Visible</Th>
                    <Th width="50px">{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {props.map((feedback) => <FeedbackRow key={feedback.id} {...feedback} />)}
            </tbody>
        </Table>
    );
}

export default Feedbacktable