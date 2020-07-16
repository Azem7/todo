import React, {Component} from 'react';

import {Card, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default class Tasklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/tasks").then(response => console.log(response.data));
    }

    render() {
        return (
            <Card>
                <Card.Header> <FontAwesomeIcon icon={faList} /> Task list</Card.Header>
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