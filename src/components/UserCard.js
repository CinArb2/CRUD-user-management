import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const UserCard = ({user, handleDelete, handleEdit, children, handleShow}) => {

  return (
    <Card>
      <Card.Header className="fs-4">{user.first_name} {user.last_name}</Card.Header>
      <Card.Body>
          <span className="text-uppercase text-secondary ">Email</span>
          <p>{user.email}</p>
          <span className="text-uppercase text-secondary">Date of birth</span>
          <p>{user.birthday ? user.birthday : 'No data'}</p>
        <Button variant="danger" className="rounded px-0 py-1" onClick={()=>handleDelete(user.id)}>
          <img className="w-50" src="https://img.icons8.com/ios/50/ffffff/delete--v1.png" alt="icon-delete"/>
        </Button>
        <Button variant="secondary" className="rounded px-0 py-1 ms-2"  onClick={()=>handleEdit(user)}>
          <img className="w-50" src="https://img.icons8.com/ios/50/ffffff/edit--v1.png" alt="icon-edit" onClick={handleShow} />
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard