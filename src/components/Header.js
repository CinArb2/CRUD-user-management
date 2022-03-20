import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Header = ({handleShow}) => {

  return (
    <Navbar className="py-3 px-5">
      <Container>
        <Navbar.Brand className="fs-1">Users</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" onClick={handleShow} className="rounded-pill p-2">
            + Create new user
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header