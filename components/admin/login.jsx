"use client"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function AdminLogin()
{
    const[username, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[acc, setAcc] = useState({});
    //JSON.stringify({"username" : "edd", "password" : "123"}),
    const submitAdminInfo = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/user/", {
            method: 'POST',
            body: JSON.stringify({"username" : username, "password" : password}),
            headers: {
                'Content-Type' : 'application/json'
            },
            mode: "cors",
            redirect: "follow"
        }
        );
        const data = await response.json();
        setAcc(data);
    }
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Kullanici adi</Form.Label>
        <Form.Control type="text" placeholder="" value={username} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sifre</Form.Label>
        <Form.Control type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitAdminInfo}>
        Gir
      </Button>
      {acc.username}
    </Form>
    )
}