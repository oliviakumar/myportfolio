import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Image, Card, Container, Row, Col, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, UncontrolledDropdown, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class NavBar extends React.Component {
  render() {
    return (
      
          <div>
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
          <Card>
            <Jumbotron>
              <h2>sup</h2>
              <p>content</p>
            </Jumbotron>

        </Card>

        </div>
    );
  }
};

export default NavBar;