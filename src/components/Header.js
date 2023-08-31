import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header() {

    const linkStyles = {
        textDecoration: 'none',
        color:'white'
    }

    return (
        <div>
        <Navbar className='bg-success text-white p-3 bg-opacity-75'>
            <Navbar.Brand className='fw-bolder fs-2' >Bag Builder</Navbar.Brand>
            <Nav className='p-2 fs-4 text-white'>
                <NavLink 
                    exact to="/" 
                    className='text-white me-5 ms-3' 
                    style={linkStyles} 
                    activeStyle={{textDecoration: 'overline'}} 
                >
                    View Bag
                </NavLink>
                <NavLink 
                    exact to="/Collection" 
                    className='text-white me-5' 
                    style={linkStyles} 
                    activeStyle={{textDecoration: 'overline'}} 
                >
                    Select Discs
                </NavLink>
                <NavLink 
                    to="/new" 
                    className='text-white me-5'
                    style={linkStyles} 
                    activeStyle={{textDecoration: 'overline'}} 
                >
                    Add New Discs
                </NavLink>
            </Nav>
      </Navbar>
        </div>
    )
}

export default Header