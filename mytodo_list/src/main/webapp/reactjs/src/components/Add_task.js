import React, {Component} from 'react';

import {Card, Form, Button} from "react-bootstrap";
import {faPlusSquare, faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';

export default class Add_task extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.taskChange = this.taskChange.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    initialState = {
        task:'', description:'', creation_date:'', due_date:''
    }

    submitTask (event) {
        /* alert("Task: " + this.state.task + "\n" +
            "Description: " + this.state.description + "\n" +
            "Deadline: " + this.state.due_date + "\n"
        ); */
        event.preventDefault();

        const task = {
            task: this.state.task,
            description: this.state.description,
            dueDate: this.state.due_date,
            creationDate: new Date()
        };

        axios.post("http://localhost:8080/tasks/", task)
            .then(response => {
                if(response.data != null) {
                    this.setState(this.initialState);
                    alert("Task saved successfully")
                }
            })
    }

    resetTask = () => {
        this.setState(() => this.initialState)
    }

    taskChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        const {task, description, due_date} = this.state;
        return (
            <Card>
                <Card.Header>Add new Task <FontAwesomeIcon icon={faPlusSquare} /></Card.Header>
                <Form onReset={this.resetTask} onSubmit={this.submitTask} id="taskFormId">
                    <Card.Body>
                        <Form.Group controlId="formGridTask">
                            <Form.Label>Task</Form.Label>
                            <Form.Control required
                                type="text" name="task"
                                value={task}
                                onChange={this.taskChange}
                                placeholder="Enter new Task" />
                        </Form.Group>

                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control autoComplete="off"
                                type="text" name="description"
                                value={description}
                                onChange={this.taskChange}
                                placeholder="Enter Description" />
                            <Form.Text className="text-muted">
                                max. 255 letters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formGridDeadline">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control required autoComplete="off"
                                type="date" name="due_date"
                                value={due_date}
                                onChange={this.taskChange}
                                placeholder="Enter Deadline" />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}