import React, {Component} from 'react';

import {Button, Card, Form} from "react-bootstrap";
import axios from 'axios';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.valuesChanged = this.valuesChanged.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
    }

    initialState = {
        firstName:'', lastName:'', email:'', password:''
    }

    submitRegister (event) {
        /* alert("First Name: " + this.state.firstName + "\n" +
            "Last Name: " + this.state.lastName + "\n" +
            "E-Mail: " + this.state.email + "\n" +
            "Password: " + this.state.password + "\n"
        ); */
        event.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            accountCreationDate: new Date()
        };

        axios.post("http://localhost:8080/users/", user)
            .then(response => {
                if(response.data != null) {
                    this.setState(this.initialState);
                    alert("User registered successfully")
                }
            })
    }

    valuesChanged(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        const {firstName, lastName, email, password} = this.state;
        return (
            <Card>
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitRegister} id="registerFormId">
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required
                                          type="text" name="firstName"
                                          value={firstName}
                                          onChange={this.valuesChanged}
                                          placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required
                                          type="text" name="lastName"
                                          value={lastName}
                                          onChange={this.valuesChanged}
                                          placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required
                                          type="email" name="email"
                                          value={email}
                                          onChange={this.valuesChanged}
                                          placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required
                                          type="password" name="password"
                                          value={password}
                                          onChange={this.valuesChanged}
                                          placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Password again</Form.Label>
                            <Form.Control type="password" placeholder="Password again" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
