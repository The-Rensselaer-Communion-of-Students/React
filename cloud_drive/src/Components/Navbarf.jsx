import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
export default function Navbarf() {
  return (
    <div style={{ display: 'block', paddingLeft: "10px"}}>
    <Navbar bg="light">
    <Navbar.Brand href="/">
        <img
            src="logo.jpg"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
        />CloudDrive
    </Navbar.Brand>
    <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Item>
        <Nav.Link href="/dashboard">Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/dashboard">Files</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/Upload">Upload</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/help">Help</Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar>
  </div>
  )
}
