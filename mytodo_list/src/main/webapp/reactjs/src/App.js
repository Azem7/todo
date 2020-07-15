import React from 'react';
import './App.css';

import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasklist from "./components/Tasklist";
import Add_task from "./components/Add_task";
import Footer from "./components/Footer";

function App() {
    const marginTop = {
        marginTop: "20px"
    }

  return (
    <Router>
        <NavigationBar/>
          <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/add_task" exact component={Add_task}/>
                        <Route path="/tasks" exact component={Tasklist}/>
                    </Switch>
                </Col>
            </Row>
          </Container>
        <Footer/>
    </Router>
  );
}

export default App;
