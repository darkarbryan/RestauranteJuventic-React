
import { Button } from 'react-bootstrap';

 import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
 
 




export const ClickTracker = () => {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador( contador + 1 )
    } 

    const restarContador = () => {
        setContador( contador - 1 )
    }

    const resetContador = () => {
        setContador(0)
    }

   
    
    
    return (


<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>



    )
}
