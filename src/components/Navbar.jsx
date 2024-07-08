import React from 'react';
import "./NavBar.css"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaList, FaHeart, FaBookmark, FaBell, } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const CustomNavbar = () => {


  return (
    <Navbar bg="secondary-opacity-25" expand="lg">
      <Navbar.Brand href="#home" className='ms-3 mt-0'>
      
        <img src="hobby.png "  width="200px" height="40" alt=""  /> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <NavDropdown title={<span><FaList style={{ marginRight: '8px' }}   />Explore</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#People">People</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Places">Places</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Product">Product</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Program">Program</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#hobbies">
            
            <FaHeart style={{ marginRight: '8px' }}  />
            Hobbies
          </Nav.Link>
        </Nav>
        <Form className="d-flex align-items-center">


        <Button variant="outline-none" className="  btn1 ms-2 me-0 " data-tooltip="Bookmark">
            <FaBookmark style={{ marginRight: '2px' }} />
           
          </Button>
        <Button variant="outline-none" className="btn2  ms-2 me-0 "data-tooltip="Notification">
            <FaBell style={{ marginRight: '2px' }} />
           
          </Button>
        <Button variant="outline-none" className=" btn3 ms-2 me-2" data-tooltip="Cart">
            <FaCartShopping style={{ marginRight: '2px' }} />
           
          </Button>
          <FormControl type="text" placeholder="Search" className="me-sm-3" />
        
         

        </Form>
        <Nav>
         
          <Button variant="outline-primary" className="ms-2">
            <FaSignInAlt style={{ marginRight: '8px' }} />
            Sign In
          </Button>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default  CustomNavbar;