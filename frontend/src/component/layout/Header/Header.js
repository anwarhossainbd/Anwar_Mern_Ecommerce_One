import React from 'react'
import {Container, Nav, Navbar,Form,FormControl,Button} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

import "./Header.css"


function Header() {
  return (
      
          <Navbar  expand="lg" fixed="top" bg="dark" variant="dark" className="mystyle" >
          <Container fluid>
            <Navbar.Brand href="#">Ecommerce </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '80px' }}
                navbarScroll
              >


              <Nav.Link><NavLink exact={true}  activeStyle={{color:"deeppink"}} className="fontcolor"  to="/">HOME</NavLink> </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className="fontcolor"  to="/Product">PRODUCT</NavLink> </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className="fontcolor"  to="/Contact">CONTACT</NavLink>  </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className="fontcolor"  to="/About">ABOUT</NavLink></Nav.Link>
              
             
            
              </Nav>



              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      
  )
}

export default Header