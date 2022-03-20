import React from 'react'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  birthday: yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr),
  password: yup.string().min(4).max(15).required(),
})

const UsersForm = ({submitForm, form, handleClose}) => {
  const { register, handleSubmit, setValue , formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  
  if (form.edit) {
      setValue('first_name', form.first_name);
      setValue('last_name', form.last_name);
      setValue('email', form.email);
      setValue('birthday', form.birthday);
      setValue('password', form.password);
  }
  

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Form.Group className="mb-3" >
        
        <Form.Label>Name</Form.Label>
        <Form.Control name='first_name' type="text" placeholder="Enter name" className="my-2" {...register("first_name")}/>
        {errors.first_name && <Alert variant="danger">{errors.first_name.message}</Alert>}


        <Form.Label>Last Name</Form.Label>
        <Form.Control name='last_name' type="text" placeholder="Enter Last Name" className="my-2" {...register("last_name")} />
        {errors.last_name && <Alert variant="danger">{errors.last_name.message}</Alert>}


        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" className="my-2" {...register("email")} />
        {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control name='birthday' type="date" placeholder="Password" {...register("birthday")} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" {...register("password")} />
        {errors.password && <Alert variant="danger">{errors.password.message}</Alert>}
      </Form.Group>

      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" type="submit" className="ms-2">
        Submit
      </Button>
    </Form>
  )
}

export default UsersForm