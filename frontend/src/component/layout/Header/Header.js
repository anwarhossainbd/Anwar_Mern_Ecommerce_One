import React,{Component} from 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./Header.css"


class Header extends Component {


  constructor() {
    super();
    this.state={

        NavTitle:"navTitle",
        navBackground:"navBackground",
      
        navBarLetter :"navLetter",
        variant:"dark" ,
        navIcon:"navIcon"
    }
}


onScroll=()=>{
    if (window.scrollY>100){
        this.setState({variant:"light", NavTitle:"navTitleScroll",navBackground:"navBackgroundScroll",navBarLetter:"navLetterScroll",navIcon:"navIconScroll"})
    }
    else if (window.scrollY<100){
        this.setState({variant:"dark", NavTitle:"navTitle",navBackground:"navBackground",navBarLetter:"navLetter",navIcon:"navIcon" })
    }
}


componentDidMount() {
    window.addEventListener(
        'scroll',this.onScroll
    )
}


render(){



  return (
      
          <Navbar  collapseOnSelect className={this.state.navBackground} fixed="top" expand="lg"  variant={this.state.dark} >
          <Container fluid>
            <Navbar.Brand href="#home"  className={this.state.NavTitle} >Ecommerce </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '80px' }}
                navbarScroll
              >


              <Nav.Link><NavLink exact={true}  activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/">HOME</NavLink> </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/Products">PRODUCTS</NavLink> </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/Contact">CONTACT</NavLink>  </Nav.Link>
              <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/About">ABOUT</NavLink></Nav.Link>
              
             
            
              </Nav>



             <div className='SecondDiv'>

             <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navIcon}  to="/search"> <FontAwesomeIcon icon={faSearch}  />    </NavLink></Nav.Link>

            
             </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      
  )
}

}

export default Header