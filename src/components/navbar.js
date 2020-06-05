import React,{Component}from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class navbar extends Component {    
    render() {    
        return (

            <Navbar collapseOnSelect expand="md" bg="" variant="dark">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                    <Nav.Link href="./">Home</Nav.Link>
                    <NavDropdown title="Module1" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="../view1/View1">View1</NavDropdown.Item>
                        <NavDropdown.Item href="../view2/View2">View2</NavDropdown.Item>
                        <NavDropdown.Item href="../view3/View3">View3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="../view4/Vew4">View4</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Module2" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">View1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">View2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">View3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">View4</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#Contact_Us">Contact Us</Nav.Link>
                    <Nav.Link eventKey={2} href="#about">
                        About
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default navbar;