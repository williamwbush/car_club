import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateCar, Cars, UpdateCar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import logo from './assets/img/chicago-car-club.png';
import './styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
		<Router>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <img
            alt="Car Club Members Area"
            src={logo}
            width="30"
            className="d-inline-block align-top"
          />{' '}
          <Link to="/">Car Club Members Area</Link>
        </Navbar.Brand>
      <Nav className="move-nav" activeKey="/">
        
        <Nav.Item>
          <Nav.Link>
            <Link to='/'> Home </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to='/Cars'> Display Your Cars </Link>
          </Nav.Link>
        </Nav.Item>
      
      </Nav>

      </Navbar>

			<Switch>
        <Route exact path="/">
          <Home title="Welcome!"/>
        </Route>
        <Route path="/CreateCar">
          <CreateCar title="Create a Car:" />
        </Route>
        <Route path="/Cars">
          <Cars />
        </Route>
        <Route path="/update">
          <UpdateCar />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
