import React, {Component} from 'react';

import {Card, Table} from "react-bootstrap";

export default class Tasklist extends Component {
    render() {
        return (
            <Card>
                <Card.Header>Task list</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="hell">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Creation Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr align="center">
                            <td colSpan="6">No Tasks Available.</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}