import React, {Component} from 'react';

import {Card, Form, Button} from "react-bootstrap";
import {faPlusSquare, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Add_task extends Component {

    constructor(props) {
        super(props);
        this.state = {task:'', description:'', creation_date:'', due_date:''}
        this.taskChange = this.taskChange.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    submitTask (event) {
        alert("Task: " + this.state.task + "\n" +
            "Description: " + this.state.description + "\n" +
            "Deadline: " + this.state.due_date + "\n"
        );
        event.preventDefault();
    }

    taskChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <Card>
                <Card.Header>Add new Task <FontAwesomeIcon icon={faPlusSquare} /></Card.Header>
                <Form onSubmit={this.submitTask} id="taskFormId">
                    <Card.Body>
                        <Form.Group controlId="formGridTask">
                            <Form.Label>Task</Form.Label>
                            <Form.Control required
                                type="text" name="task"
                                value={this.state.task}
                                onChange={this.taskChange}
                                placeholder="Enter new Task" />
                        </Form.Group>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text" name="description"
                                value={this.state.description}
                                onChange={this.taskChange}
                                placeholder="Enter Description" />
                            <Form.Text className="text-muted">
                                max. 255 letters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formGridDeadline">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control required
                                type="date" name="due_date"
                                value={this.state.due_date}
                                onChange={this.taskChange}
                                placeholder="Enter Deadline" />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}