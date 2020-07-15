import React, {Component} from 'react';

import {Card, Form, Button} from "react-bootstrap";

export default class Add_task extends Component {
    render() {
        return (
            <Card>
                <Card.Header>Add new Task</Card.Header>
                <Form id="taskFormId">
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Task</Form.Label>
                            <Form.Control
                                type="text" name="task"
                                placeholder="Enter new Task" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text" name="description"
                                placeholder="Enter Description" />
                            <Form.Text className="text-muted">
                                max. 350 letters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control
                                type="text" name="deadline"
                                placeholder="Enter Deadline" />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}