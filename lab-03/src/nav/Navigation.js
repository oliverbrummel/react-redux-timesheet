import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            TimeSheetz
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/employees">Employees</NavLink></NavItem>
          <NavItem><NavLink to="/timesheets">Timesheets</NavLink></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;