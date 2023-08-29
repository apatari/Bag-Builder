import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <div>
        <Navbar className='bg-success text-white p-3 bg-opacity-75'>
            <Navbar.Brand className='fw-bolder fs-2' >Bag Builder</Navbar.Brand>
            <Nav className='p-2 fs-4 text-white'>
                <Nav.Link className='text-white me-3' >View Bag</Nav.Link>
                <Nav.Link className='text-white me-3' >Select Discs</Nav.Link>
                <Nav.Link className='text-white me-3' >Add New Discs</Nav.Link>
            </Nav>
      </Navbar>
        </div>
    )
}

export default Header