import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const UsersList = ({ children }) => {
  
  return (
    <Container className='m-auto pt-4'>
      <Row>
        {children}
      </Row>
    </Container>
  )
}

export default UsersList