"use client";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Router, useRouter } from 'next/navigation';

function click()
{
    let text = document.getElementById('input').value;
    if(text == "")
    {
      text = "all"
    }
    text = text.replaceAll(" ", "-");
    return text;
}

function Header() {
  const router = useRouter();
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
        <Navbar.Brand href="/">**LOGO**</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Videolar</Nav.Link>
            <Nav.Link href="/kategoriler">Kategoriler</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Ara"
              className="me-2"
              aria-label="Search"
              id='input'
            />
            <Button variant="light" onClick={function() {
              var text = click();
              router.push(`/videos/${text}/${1}`)
            }}>Ara</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;