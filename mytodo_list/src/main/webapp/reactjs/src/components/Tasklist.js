import React, {Component} from 'react';

import {Card, Table, ButtonGroup, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export default class Tasklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/tasks")
            .then(response => response.data).then((data) => {
            this.setState({tasks: data});
        });
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
                            <th>Deadline</th>
                            <th>Creation Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.tasks.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">No Tasks Available.</td>
                                </tr> :
                            this.state.tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.task}</td>
                                    <td>{task.description}</td>
                                    <td>{task.dueDate}</td>
                                    <td>{task.creationDate}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>{' '}
                                            <Button size="sm" variant="outline-danger">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}