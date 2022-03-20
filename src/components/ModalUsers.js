import React from 'react'
import Modal from 'react-bootstrap/Modal';

const ModalUsers = ({ show, title, children }) => {
  
  return (
    <Modal
        show={show}
        backdrop = 'static'
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>{title} user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
    </Modal>
  )
}

export default ModalUsers