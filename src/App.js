
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Header from './components/Header'
import UsersList from './components/UsersList';
import UserCard from './components/UserCard';
import ModalUsers from './components/ModalUsers';
import UsersForm from './components/UsersForm';
import formatDate from './Helpers/formatDate';

function App() {
  //Form states
  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState(false)
  
  //Modal states
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setEdit(false)
  };

  useEffect(() => {
    getUsers()
  }, [])

  // get users everytime we update,  create user or delete user
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(data=> setUsers(data.data))
  }
  
  const submitForm = (data) => {
    // only convert date structure when date is not empty or null
    let dataSent = data ? { ...data, birthday: formatDate(data.birthday) } : data
    
    if (!edit) {
      axios.post('https://users-crud1.herokuapp.com/users/', dataSent)
        .then(() => getUsers())
    } else if (edit.edit) {
      axios.put(`https://users-crud1.herokuapp.com/users/${edit.id}/`, dataSent)
        .then(() => getUsers())
      setEdit(false)
    }
    handleClose()
  }

  const handleEdit = (data) => {
    setEdit({ ...data, edit: true })
    handleShow()
  }

  const handleDelete = (userID) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userID}/`)
     .then(()=>getUsers())
  }

  return (
    <div className="App">
      <Header handleShow={handleShow}/>
      <UsersList>
        {users.map(user => (
          <Col lg={4} md={4} sm={6} xs={8} className='m-auto my-4' key={user.id}>
            <UserCard
              key={user.id}
              user={user}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleShow={handleShow}>
            </UserCard>
          </Col>
        ))}
      </UsersList>
      { show ?
        <ModalUsers show={show} title={edit.edit? 'Edit':'Create New'} >
          <UsersForm submitForm={submitForm} form={edit} handleClose={handleClose}/>
        </ModalUsers>
        : ''
      }
    </div>
  );
}

export default App;
