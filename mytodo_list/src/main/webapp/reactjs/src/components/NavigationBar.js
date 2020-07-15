import React, {Component} from 'react';

import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (<div>
            <Navbar bg="primary" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="todo_logo.png" width="25" height="25" alt="brand"/> myTODO list
                </Link>
                <Nav className="mr-auto">
                    <Link to={""} className="nav-link">Home</Link>
                    <Link to={"login"} className="nav-link">Login</Link>
                    <Link to={"register"} className="nav-link">Register</Link>
                    <Link to={"add_task"} className="nav-link">Add new Task</Link>
                    <Link to={"tasks"} className="nav-link">Tasks</Link>
                </Nav>
            </Navbar>
        </div>)
    }
}
